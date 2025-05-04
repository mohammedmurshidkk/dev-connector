import React from 'react';
import { FormkitAvatarman } from '../../public/icons/FormkitAvatarman';
import TypingFormattedText from './TypingFormattedText';

const ChatMessageResponse = ({ index, message, loading }) => {
  return (
    <div className='flex justify-start items-start mb-6'>
      <FormkitAvatarman className='w-10 h-10 rounded-xl mr-5 border border-airbnb-gray p-1 bg-airbnb-white' />
      <div className='bg-airbnb-white text-airbnb-black py-5 px-6 rounded-2xl xxs:max-w-[77vw] xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl break-words shadow-md border border-airbnb-gray'>
        {loading ? <>Thinking</> : <TypingFormattedText text={message} />}
      </div>
    </div>
  );
};

export default ChatMessageResponse;
