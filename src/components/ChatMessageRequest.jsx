import React from 'react';

const ChatMessageRequest = ({ message }) => {
  return (
    <div className='flex justify-end mb-6'>
      <div className='bg-gray-700 text-white py-4 px-5 rounded-2xl xxs:max-w-[72vw] xs:max-w-xs sm:max-w-sm max-w-lg break-words shadow-lg'>
        {message}
      </div>
    </div>
  );
};

export default ChatMessageRequest;
