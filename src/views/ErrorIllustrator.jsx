import Image from 'next/image';
import React from 'react';

const ErrorIllustrator = ({ open, onClose }) => {
  return (
    <div
      id='error-modal'
      tabIndex='-1'
      aria-hidden='true'
      className={`${
        open ? 'flex' : 'hidden'
      } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full h-full bg-black bg-opacity-60`}
      onClick={e => onClose()}
    >
      <div
        onClick={e => e?.stopPropagation()}
        className='relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl h-auto bg-white rounded-md shadow-lg p-4'
      >
        <div className='flex flex-col items-center'>
          <Image
            alt='server-maintenance'
            src='/images/server-maintenance.jpg'
            priority
            width={400}
            height={400}
            className='w-full h-auto max-w-[80%] sm:max-w-[60%] md:max-w-[50%] lg:max-w-[400px]'
          />
          <h2 className='mt-5 font-bold text-xl sm:text-2xl md:text-3xl text-red-500 text-center'>
            Server Under Maintenance
          </h2>
          <h5 className='mt-4 text-center text-sm sm:text-base md:text-lg text-zinc-600 max-w-[90%] sm:max-w-[80%]'>
            Our servers are currently undergoing maintenance. We apologize for the inconvenience and will be back online
            shortly.
          </h5>
          <button
            type='button'
            className='mt-7 text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm sm:text-base md:text-lg inline-flex items-center px-6 sm:px-8 md:px-10 py-2 sm:py-2.5 text-center'
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorIllustrator;
