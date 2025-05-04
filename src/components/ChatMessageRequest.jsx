import React from 'react';

const ChatMessageRequest = ({ message }) => {
  return (
    <div className='flex justify-end mb-6'>
      <div className='bg-airbnb-white text-airbnb-black py-5 px-6 rounded-2xl xxs:max-w-[72vw] xs:max-w-xs sm:max-w-sm max-w-lg break-words shadow-md border border-airbnb-gray'>
        {message}
      </div>
    </div>
  );
};

export default ChatMessageRequest;
