'use client';

import { useEffect, useState } from 'react';
import { useChat } from 'ai/react';
import Playground from '@/views/play-ground';
import ErrorIllustrator from '@/views/ErrorIllustrator';

export default function Home() {
  const { isLoading, messages, input, error, handleInputChange, handleSubmit } = useChat({
    streamMode: 'text'
  });

  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (error && error instanceof Error) {
      setHasError(true);
    }
  }, [error]);

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight + 15);
  }, [messages]);

  return (
    <>
      <Playground
        messages={messages}
        inputValue={input}
        isLoading={isLoading}
        onInputValueChange={handleInputChange}
        onSubmit={handleSubmit}
      />
      <ErrorIllustrator open={hasError} onClose={() => setHasError(false)} />
    </>
  );
}
