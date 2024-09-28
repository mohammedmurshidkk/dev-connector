import ChatMessageRequest from '@/components/ChatMessageRequest';
import ChatMessageResponse from '@/components/ChatMessageResponse';
import ThinkingIllustrator from '@/components/ThinkingIllustrator';
import { formatContent } from '@/utils/formatContent';
import Footer from './Footer';
import Header from './Header';

const Playground = ({ messages, inputValue, isLoading, onInputValueChange, onSubmit }) => {
  return (
    <main className='min-h-[100vh] h-auto flex flex-col'>
      <Header />
      <section className='xxs:mx-4 xs:mx-7 md:mx-16 lg:mx-32 xl:mx-44 flex-grow pt-8'>
        {messages?.length > 0 ? (
          <>
            {messages?.map((message, i) => {
              return (
                <div key={`msg-${i}`}>
                  {message?.role === 'user' ? (
                    <ChatMessageRequest message={message?.content} />
                  ) : (
                    <ChatMessageResponse
                      message={formatContent(message?.content).text}
                      loading={isLoading && i === message?.length}
                    />
                  )}
                </div>
              );
            })}
            {isLoading && <ThinkingIllustrator />}
          </>
        ) : (
          <div className='px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 py-6 xs:py-8 sm:py-10 md:py-12'>
            <h1 className='text-2xl xs:text-3xl sm:text-4xl lg:text-4xl font-bold'>Hello and Welcome! 👋</h1>
            <h6 className='mt-5 text-base xs:text-lg sm:text-xl lg:text-lg text-zinc-700 dark:text-zinc-400'>
              I&apos;m thrilled to have you here. This portfolio showcases my work and projects, all powered by the
              exciting potential of artificial intelligence.
            </h6>
            <h6 className='text-base xs:text-lg sm:text-xl lg:text-lg text-zinc-700 dark:text-zinc-400'>
              Whether you&apos;re here to explore, learn, or collaborate, you&apos;re in the right place.
            </h6>
            <h6 className='mt-5 text-base xs:text-lg sm:text-xl lg:text-lg text-zinc-700 dark:text-zinc-400'>
              Feel free to look around, and don&apos;t hesitate to ask if you have any questions or need more
              information.
            </h6>
            <h6 className='mt-5 text-lg xs:text-xl sm:text-xl lg:text-lg text-zinc-700 dark:text-zinc-400'>
              Enjoy your visit! 🤝
            </h6>
          </div>
        )}
      </section>
      <Footer
        inputValue={inputValue}
        isLoading={isLoading}
        onInputValueChange={onInputValueChange}
        onSubmit={onSubmit}
      />
    </main>
  );
};

export default Playground;
