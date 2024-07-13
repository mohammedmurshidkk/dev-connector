import Image from 'next/image';
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
          <div className='flex'>
            <div className='grid items-center'>
              <Image
                alt='Profile picture of Mohammed Murshid KK'
                src='/images/avatar.png'
                loading='lazy'
                objectFit='fill'
                className='xxs:hidden md:inline-block'
                width={400}
                height={400}
              />
            </div>
            <div className='xxs:px-4 xs:px-8 sm:px-14 xxs:py-6 xs:py-8 sm:py-16'>
              <h1 className='text-3xl'>Hello and Welcome! 👋</h1>
              <h6 className='mt-5'>
                I&apos;m thrilled to have you here. This portfolio showcases my work and projects, all powered by the
                exciting potential of artificial intelligence.
              </h6>
              <h6>Whether you&apos;re here to explore, learn, or collaborate, you&apos;re in the right place.</h6>
              <h6 className='mt-5'>
                Feel free to look around, and don&apos;t hesitate to ask if you have any questions or need more
                information.
              </h6>
              <h6 className='mt-5 text-lg'>Enjoy your visit! 🤝</h6>
            </div>
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
