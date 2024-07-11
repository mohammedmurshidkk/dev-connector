'use client';

import { useEffect } from 'react';
import { useChat } from 'ai/react';
import Playground from '@/views/play-ground';

export default function Home() {
  const { isLoading, messages, input, handleInputChange, handleSubmit } = useChat({
    streamMode: 'text'
  });

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight + 15);
  }, [messages]);

  return (
    <Playground
      messages={messages}
      inputValue={input}
      isLoading={isLoading}
      onInputValueChange={handleInputChange}
      onSubmit={handleSubmit}
    />
  );
}
