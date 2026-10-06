import { Fragment, type ReactNode } from 'react';

/** Renders `\n` in copy as <br /> line breaks. */
function withLineBreaks(text: string, keyPrefix: string): ReactNode {
  const lines = text.split('\n');
  if (lines.length === 1) return text;

  return lines.map((line, index) => (
    <Fragment key={`${keyPrefix}-${index}`}>
      {line}
      {index < lines.length - 1 && (
        <>
          {' '}
          <br />
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
