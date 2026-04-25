#!/usr/bin/env python3
"""
Script to:
1. Remove the "Hours of Operation" section from all non-homepage pages
2. Add <Contact /> component (and its import) to all non-homepage pages
"""

import os
import re
import sys

BASE = "/Users/nargisfatima/Downloads/Roselle Center For Healing/roselle/app"
SKIP_FILES = {
    os.path.join(BASE, "page.tsx"),  # homepage
    os.path.join(BASE, "components", "Contact.tsx"),  # the component itself
}


def get_contact_import_path(file_path: str) -> str:
    """Get the relative import path for Contact from the given file."""
    # Calculate depth relative to app/
    rel = os.path.relpath(os.path.dirname(file_path), BASE)
    depth = len(rel.split(os.sep))
    return "../" * depth + "components/Contact"


def remove_hours_section(content: str) -> str:
    """
    Remove the <section ...> block that contains 'Hours of Operation'.
    Strategy: find <Footer />, then look backwards to find the last </section>
    before it, then find the matching opening <section, verify it contains
    'Hours of Operation', and remove it.
    """
    footer_match = re.search(r'\n\s*<Footer\s*/>', content)
    if not footer_match:
        return content

    before_footer = content[:footer_match.start()]

    # Find the last </section> before <Footer />
    last_close = before_footer.rfind('</section>')
    if last_close == -1:
        return content

    # Get the content before and including this closing tag
    chunk = before_footer[:last_close + len('</section>')]

    # Find matching <section by counting backwards
    # We need to find the opening <section that matches this </section>
    depth = 1
    pos = last_close - 1
    open_section_pos = None

    while pos >= 0 and depth > 0:
        # Check for </section> at this position
        close_tag = '</section>'
        open_tag_re = re.compile(r'<section[\s>]')

        if chunk[pos:pos + len(close_tag)] == close_tag:
            # Not counting the one we already found (depth starts at 1)
            if pos < last_close:
                depth += 1
            pos -= 1
            continue

        # Check for <section at this position (could be <section> or <section ...>)
        if chunk[pos:pos + 8] == '<section':
            # Make sure it's actually a section tag (next char is space or >)
            rest = chunk[pos + 8:]
            if rest and (rest[0] in ' \t\n\r>'):
                depth -= 1
                if depth == 0:
                    open_section_pos = pos
                    break
        pos -= 1

    if open_section_pos is None:
        return content

    # Extract the section content
    section_content = content[open_section_pos:last_close + len('</section>')]

    # Verify it contains 'Hours of Operation'
    if 'Hours of Operation' not in section_content:
        return content

    # Find the full line containing the opening <section (include leading whitespace/newline)
    # Go back to find the newline before the section
    line_start = content.rfind('\n', 0, open_section_pos)
    if line_start == -1:
        line_start = 0
    else:
        line_start += 1  # skip the newline itself; we'll keep the newline before

    # Find the end: end of the </section> line
    line_end = content.find('\n', last_close + len('</section>'))
    if line_end == -1:
        line_end = len(content)
    else:
        line_end += 1  # include the newline

    # Remove the section (keep the newline before)
    new_content = content[:line_start] + content[line_end:]
    return new_content


def remove_hours_constant(content: str) -> str:
    """Remove 'const HOURS = [...]' block if present."""
    # Match: const HOURS = [\n  ...\n];
    pattern = re.compile(
        r'\nconst HOURS = \[.*?\];\n',
        re.DOTALL
    )
    return pattern.sub('\n', content)


def remove_stray_hours_comments(content: str) -> str:
    """Remove standalone JSX comment lines referencing Hours/Location that are left over."""
    # Match lines like:          {/* ── Hours + Location ── */}
    # These are the section divider comments, distinct from inline component comments.
    # Pattern: {/* ... Hours ... Location ... */} or {/* ... Hours + Location ... */}
    pattern = re.compile(
        r'\n[ \t]*\{/\*[^*]*[Hh]ours[^*]*(Location|Footer)[^*]*\*/\}[ \t]*(?=\n)',
        re.MULTILINE
    )
    return pattern.sub('', content)


def add_contact_import(content: str, import_path: str) -> str:
    """Add import Contact if not already present."""
    if 'import Contact from' in content:
        return content

    # Find the last import line and add after it
    last_import_match = None
    for m in re.finditer(r'^import .+;', content, re.MULTILINE):
        last_import_match = m

    if last_import_match:
        insert_pos = last_import_match.end()
        return (content[:insert_pos] +
                f'\nimport Contact from "{import_path}";' +
                content[insert_pos:])
    return content


def add_contact_component(content: str) -> str:
    """Add <Contact /> just before <Footer />."""
    if '<Contact' in content:
        return content

    # Add before <Footer />
    return re.sub(
        r'(\n(\s*)<Footer\s*/>)',
        r'\n\2<Contact />\1',
        content,
        count=1
    )


def process_file(file_path: str) -> bool:
    """Process a single file. Returns True if modified."""
    with open(file_path, 'r', encoding='utf-8') as f:
        original = f.read()

    content = original

    # Step 1: Remove Hours of Operation section
    content = remove_hours_section(content)

    # Step 2: Remove local HOURS constant
    content = remove_hours_constant(content)

    # Step 2b: Remove stray Hours/Location comments
    content = remove_stray_hours_comments(content)

    # Step 3: Add Contact import
    import_path = get_contact_import_path(file_path)
    content = add_contact_import(content, import_path)

    # Step 4: Add <Contact /> before <Footer />
    content = add_contact_component(content)

    if content != original:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False


def find_all_files():
    """Find all .tsx files in app/ that need processing."""
    files = []
    for root, dirs, filenames in os.walk(BASE):
        # Skip the components directory (except we need to handle client components)
        for fname in filenames:
            if not fname.endswith('.tsx'):
                continue
            full_path = os.path.join(root, fname)
            if full_path in SKIP_FILES:
                continue
            # Only process files that are page.tsx or known client components
            if fname == 'page.tsx' or fname in (
                'BlogPostClient.tsx', 'ArticleClient.tsx', 'CategoryClient.tsx'
            ):
                files.append(full_path)
    return sorted(files)


def main():
    files = find_all_files()
    print(f"Found {len(files)} files to process\n")

    modified = []
    skipped = []
    errors = []

    for f in files:
        rel = os.path.relpath(f, os.path.dirname(BASE))
        try:
            changed = process_file(f)
            if changed:
                modified.append(rel)
                print(f"  ✓ Modified: {rel}")
            else:
                skipped.append(rel)
                print(f"  - Skipped:  {rel}")
        except Exception as e:
            errors.append((rel, str(e)))
            print(f"  ✗ ERROR:    {rel}: {e}", file=sys.stderr)

    print(f"\n{'='*60}")
    print(f"Modified: {len(modified)}")
    print(f"Skipped:  {len(skipped)}")
    print(f"Errors:   {len(errors)}")

    if errors:
        print("\nErrors:")
        for path, err in errors:
            print(f"  {path}: {err}")


if __name__ == "__main__":
    main()
