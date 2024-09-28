import React from 'react';
import { FormkitAvatarman } from '../../public/icons/FormkitAvatarman';
import TypingFormattedText from './TypingFormattedText';

const ChatMessageResponse = ({ index, message, loading }) => {
  return (
    <div className='flex justify-start items-start mb-6'>
      <FormkitAvatarman className='w-8 h-8 rounded-full mr-5 border p-1 border-gray-950 dark:border-neutral-100' />
      <div className='bg-gray-50 dark:bg-gray-300 text-gray-800 py-4 px-5 rounded-2xl xxs:max-w-[77vw] xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl break-words shadow-lg'>
        {loading ? <>Thinking</> : <TypingFormattedText text={message} />}
      </div>
    </div>
  );
};

export default ChatMessageResponse;
