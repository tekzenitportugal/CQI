'use client';

import { useMemo, useState } from 'react';
import { Container } from '@/components/ui/Container';
import styles from './GlossarySection.module.scss';

export type GlossaryTermEntry = {
  term: string;
  definition: string;
  category: string;
};

export type GlossarySectionData = {
  categories: string[];
  entries: GlossaryTermEntry[];
};

type GlossarySectionProps = {
  data: GlossarySectionData;
};

const ALPHABET = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

function slugify(term: string) {
  return term.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

/** Figma "GLOSSARY" section (6079:38465): A–Z jump nav + category tabs/search/print + term list. */
export function GlossarySection({ data }: GlossarySectionProps) {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState(data.categories[0]);
  const [activeLetter, setActiveLetter] = useState<string | null>(null);

  const availableLetters = useMemo(() => {
    const letters = new Set<string>();
    data.entries.forEach((entry) => letters.add(entry.term[0]?.toUpperCase()));
    return letters;
  }, [data.entries]);

  const filteredEntries = useMemo(() => {
    const q = query.trim().toLowerCase();
    return data.entries.filter((entry) => {
      const matchesCategory = activeCategory === data.categories[0] || entry.category === activeCategory;
      const matchesQuery =
        !q || entry.term.toLowerCase().includes(q) || entry.definition.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [data.entries, data.categories, query, activeCategory]);

  const handleLetterClick = (letter: string) => {
    setActiveLetter(letter);
    const target = data.entries.find((entry) => entry.term[0]?.toUpperCase() === letter);
    if (!target) return;
    document.getElementById(`term-${slugify(target.term)}`)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.layout}>
          <nav className={styles.alphabet} aria-label="Jump to letter">
            {ALPHABET.map((letter) => {
              const enabled = availableLetters.has(letter);
              return (
                <button
                  key={letter}
                  type="button"
                  className={`${styles.letter} ${enabled ? styles.letterEnabled : ''} ${
                    activeLetter === letter ? styles.letterActive : ''
                  }`.trim()}
                  disabled={!enabled}
                  onClick={() => handleLetterClick(letter)}
                >
                  {letter}
                </button>
              );
            })}
          </nav>

          <div className={styles.content}>
            <div className={styles.controls}>
              <div className={styles.tabs}>
                {data.categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    className={`${styles.tab} ${category === activeCategory ? styles.tabActive : ''}`.trim()}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <label className={styles.search}>
                <input
                  type="text"
                  placeholder="Search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  className={styles.searchInput}
                />
                <img src="/images/resources/glossary/search.svg" alt="" width={16} height={16} aria-hidden="true" />
              </label>

              <button
                type="button"
                className={styles.printButton}
                onClick={() => window.print()}
                aria-label="Print glossary"
              >
                <img src="/images/resources/glossary/printer.svg" alt="" width={24} height={24} aria-hidden="true" />
              </button>
            </div>

            <ul className={styles.list}>
              {filteredEntries.map((entry) => (
                <li key={entry.term} id={`term-${slugify(entry.term)}`} className={styles.row}>
                  <p className={styles.term}>{entry.term}</p>
                  <p className={styles.definition}>{entry.definition}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
