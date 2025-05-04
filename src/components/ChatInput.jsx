import { IconamoonSendLight } from '../../public/icons/IconamoonSendLight';
import { BubbleLoading } from '../../public/icons/BubbleLoading';

const ChatInput = ({ inputValue, disabled, loading, onInputValueChange }) => {
  return (
    <div className='flex items-center rounded-xl p-3 shadow border border-airbnb-gray bg-airbnb-white'>
      <input
        type='text'
        placeholder='Type a message...'
        className='flex-grow py-3 px-5 rounded-lg bg-transparent outline-none text-airbnb-black placeholder-gray-400'
        value={inputValue}
        onChange={onInputValueChange}
      />
      <button
        type='submit'
        disabled={disabled}
        className={`p-3 rounded-xl ml-2 bg-airbnb-teal text-airbnb-white font-semibold hover:bg-airbnb-black transition-colors duration-150 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {loading ? <BubbleLoading /> : <IconamoonSendLight height='1.5rem' width='1.5rem' />}
      </button>
    </div>
  );
};

export default ChatInput;
