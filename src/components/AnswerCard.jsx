'use client';
import { marked } from 'marked';
import { useEffect, useRef } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css';
import 'highlight.js/styles/github.css';

marked.setOptions({
  highlight: function (code, lang) {
    const validLang = hljs.getLanguage(lang) ? lang : 'plaintext';
    return hljs.highlight(code, { language: validLang }).value;
  },
  langPrefix: 'hljs language-', // Required for styling
  gfm: true,
  breaks: true
});

const renderer = new marked.Renderer();

const highlight = (html, searchTerm) => {
  if (!searchTerm) return html;
  const regex = new RegExp(`(${searchTerm})`, 'gi');
  return html.replace(regex, '<mark>$1</mark>');
};

export default function AnswerCard({ answer, searchTerm }) {
  const ref = useRef(null);

  // Prevent horizontal scroll if no long lines
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollLeft = 0;
    }
  }, [answer]);

  // Convert markdown to HTML and highlight search term
  const rawHTML = marked(answer, { renderer });
  const highlightedHTML = highlight(rawHTML, searchTerm);

  return (
    <div
      ref={ref}
      className='prose prose-invert max-w-none overflow-x-auto text-sm leading-relaxed'
      dangerouslySetInnerHTML={{ __html: highlightedHTML }}
    />
  );
}
