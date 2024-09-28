import { IconamoonSendLight } from '../../public/icons/IconamoonSendLight';
import { BubbleLoading } from '../../public/icons/BubbleLoading';

const ChatInput = ({ inputValue, disabled, loading, onInputValueChange }) => {
  return (
    <div className='flex items-center rounded-full p-2 shadow-md bg-white dark:bg-gray-700'>
      <input
        type='text'
        placeholder='Type a message...'
        className='flex-grow py-2 px-4 rounded-lg bg-transparent outline-none'
        value={inputValue}
        onChange={onInputValueChange}
      />
      <button
        type='submit'
        disabled={disabled}
        className={`p-2 rounded-full ${
          disabled ? 'dark:bg-gray-400' : 'dark:bg-gray-600 hover:bg-gray-100 dark:hover:bg-gray-500'
        }`}
      >
        {loading ? <BubbleLoading /> : <IconamoonSendLight height='1.5rem' width='1.5rem' />}
      </button>
    </div>
  );
};

export default ChatInput;
