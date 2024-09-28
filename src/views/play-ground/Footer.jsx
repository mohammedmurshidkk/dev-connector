import ChatInput from '@/components/ChatInput';

const Footer = ({ inputValue, isLoading, onInputValueChange, onSubmit }) => {
  return (
    <form
      onSubmit={e => {
        e?.preventDefault();
        if (inputValue) {
          onSubmit(e);
        }
      }}
      className='bg-background-primary min-h-14 min-w-full xxs:px-3 px-5 py-2 sticky bottom-0'
    >
      <div className='xs:mx-2 md:mx-9 lg:mx-24 xl:mx-36'>
        <ChatInput
          inputValue={inputValue}
          disabled={isLoading}
          loading={isLoading}
          onInputValueChange={onInputValueChange}
        />
      </div>
      <h6 className='text-center mt-2 text-xs text-zinc-600 dark:text-zinc-400'>
        Copyright (c) 2024 Mohammed Murshid KK
      </h6>
    </form>
  );
};

export default Footer;
