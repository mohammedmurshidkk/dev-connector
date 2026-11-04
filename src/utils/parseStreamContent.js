import { formatContent } from './formatContent';

const MARKER = /\[\[(status|error):([^\]]*)\]\]/g;

// Splits a streamed assistant message into its latest progress status, error and answer text
export function parseStreamContent(content = '') {
  let status = null;
  let error = null;

  for (const [, type, value] of content.matchAll(MARKER)) {
    if (type === 'status') status = value;
    if (type === 'error') error = value;
  }

  const rest = content.replace(MARKER, '').trim();

  return { status, error, text: rest ? formatContent(rest).text : '' };
}
