import React, { useState, useEffect } from 'react';
import { marked } from 'marked';
import { parseText } from '@/utils/parseText';

const renderer = new marked.Renderer();
renderer.link = link => {
  return `<a href="${link?.href}" target="_blank" rel="noopener noreferrer">${link?.raw}</a>`;
};

const RenderLine = ({ line }) => {
  const html = marked.parseInline(line, { renderer });
  return <div className='response-line' dangerouslySetInnerHTML={{ __html: html }} />;
};

const TypingFormattedText = ({ text, speed = 30 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [parsedText, setParsedText] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    const lines = parseText(text);
    setParsedText(lines);
    setDisplayedText('');
    setCurrentLine(0);
  }, [text]);

  useEffect(() => {
    if (currentLine >= parsedText.length) return;

    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayedText(prev => prev + parsedText[currentLine].charAt(index));
      index += 1;
      if (index === parsedText[currentLine].length) {
        clearInterval(intervalId);
        setTimeout(() => {
          setDisplayedText('');
          setCurrentLine(prev => prev + 1);
        }, speed);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [parsedText, currentLine, speed]);

  return (
    <div>
      {parsedText.slice(0, currentLine).map((line, index) => (
        <RenderLine line={line} key={index} />
      ))}
      {currentLine < parsedText.length && <RenderLine line={displayedText} />}
    </div>
  );
};

export default TypingFormattedText;
