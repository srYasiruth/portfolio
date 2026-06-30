import { useEffect, useMemo, useState } from 'react';
import { Command, Search } from 'lucide-react';
import { profile } from '../data/profile.js';

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');

  const commands = useMemo(
    () => [
      ...profile.nav.map((item) => ({ ...item, hint: 'Navigate' })),
      { label: 'GitHub', href: profile.github, hint: 'External' },
      { label: 'Resume', href: profile.resume || '#contact', hint: profile.resume ? 'PDF' : 'Pending' },
    ],
    [],
  );

  const filtered = commands.filter((item) => item.label.toLowerCase().includes(query.toLowerCase()));

  useEffect(() => {
    const onKeyDown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setOpen((value) => !value);
      }
      if (event.key === 'Escape') setOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const runCommand = (href) => {
    setOpen(false);
    setQuery('');
    if (href.startsWith('http')) {
      window.open(href, '_blank', 'noopener,noreferrer');
      return;
    }
    window.location.href = href;
  };

  if (!open) {
    return (
      <button className="palette-trigger" type="button" onClick={() => setOpen(true)} aria-label="Open command palette">
        <Command size={16} aria-hidden="true" />
        <span>Ctrl K</span>
      </button>
    );
  }

  return (
    <div className="palette-overlay" role="presentation" onMouseDown={() => setOpen(false)}>
      <div className="palette" role="dialog" aria-modal="true" aria-label="Command palette" onMouseDown={(event) => event.stopPropagation()}>
        <label className="palette-search">
          <Search size={18} aria-hidden="true" />
          <input
            autoFocus
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search sections..."
          />
        </label>
        <div className="palette-results">
          {filtered.map((item) => (
            <button key={`${item.label}-${item.href}`} type="button" onClick={() => runCommand(item.href)}>
              <span>{item.label}</span>
              <small>{item.hint}</small>
            </button>
          ))}
          {!filtered.length && <p>No command found.</p>}
        </div>
      </div>
    </div>
  );
}
