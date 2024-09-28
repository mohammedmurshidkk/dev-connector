import { useTheme } from 'next-themes';
import { MdiThemeLightDark } from '../../../public/icons/MdiThemeLightDark';

const Header = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <div className='bg-background-primary py-5 xxs:px-4 xs:px-5 md:px-7 px-10 min-h-14 sticky top-0 flex items-center justify-between border-b border-gray-600 dark:border-slate-400'>
      <h6 className='font-bold text-xl'>Mohammed Murshid KK</h6>
      <div>
        <button
          className='p-2 rounded-lg border-2 border-neutral-900 dark:border-white dark:bg-gray-700'
          onClick={handleThemeChange}
        >
          <MdiThemeLightDark className='xxs:w-6 xxs:h-5' />
        </button>
      </div>
    </div>
  );
};

export default Header;
