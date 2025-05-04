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
      className='bg-airbnb-white min-h-16 min-w-full xxs:px-4 px-8 py-4 sticky bottom-0 border-t border-airbnb-gray'
    >
      <div className='xs:mx-2 md:mx-9 lg:mx-24 xl:mx-36'>
        <ChatInput
          inputValue={inputValue}
          disabled={isLoading}
          loading={isLoading}
          onInputValueChange={onInputValueChange}
        />
      </div>
    </form>
  );
};

export default Footer;
