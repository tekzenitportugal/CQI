import { Fragment, type ReactNode } from 'react';

/** Phrases that must stay on one line ("not" never gets stranded before the hyphenated term). */
const NO_BREAK_PHRASES = /(not rip-and-replace|rip-and-replace)/gi;

function withNoBreaks(line: string, keyPrefix: string): ReactNode {
  const parts = line.split(NO_BREAK_PHRASES);
  if (parts.length === 1) return line;

  return parts.map((part, index) =>
    index % 2 === 1 ? (
      <span key={`${keyPrefix}-nb-${index}`} style={{ whiteSpace: 'nowrap' }}>
        {part}
      </span>
    ) : (
      part
    ),
  );
}

/** Renders `\n` in copy as <br /> line breaks. */
function withLineBreaks(text: string, keyPrefix: string): ReactNode {
  const lines = text.split('\n');
  if (lines.length === 1) return withNoBreaks(text, keyPrefix);

  return lines.map((line, index) => (
    <Fragment key={`${keyPrefix}-${index}`}>
      {withNoBreaks(line, `${keyPrefix}-${index}`)}
      {index < lines.length - 1 && (
        <>
          {' '}
          <br className="br-desktop" />
        </>
      )}
    </Fragment>
  ));
}

export function highlightText(
  text: string,
  highlights: string[] = [],
  highlightClassName = 'text-highlight',
) {
  if (!highlights.length) return withLineBreaks(text, 'line');

  const pattern = highlights
    .map((phrase) => phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .join('|');
  const regex = new RegExp(`(${pattern})`, 'gi');
  const parts = text.split(regex);

  return parts.map((part, index) => {
    const isHighlight = highlights.some(
      (phrase) => phrase.toLowerCase() === part.toLowerCase(),
    );

    if (isHighlight) {
      return (
        <span key={`${part}-${index}`} className={highlightClassName}>
          {withLineBreaks(part, `hl-${index}`)}
        </span>
      );
    }

    return <Fragment key={`${part}-${index}`}>{withLineBreaks(part, `${index}`)}</Fragment>;
  });
}
