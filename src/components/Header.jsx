import {useState, useEffect} from 'react'

const Header = () => {
    const [theme, setTheme] = useState(() => {
        // Check for the preferred color scheme on initial load
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        return prefersDarkMode ? 'dark' : 'light';
    });

    useEffect(() => {
        // Update the class on the root element based on the theme
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const toggleDarkMode = () => {
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    };
    return (
        <>
            <header className='flex items-center justify-between text-HomepageItems dark:text-white px-4 py-5 dark:bg-DarkBlue bg-white shadow-md'>
                <p>Where in the world?</p>
                <label htmlFor="dark-mode-toggle" className='flex gap-1 items-center' onClick={toggleDarkMode}>
                    <input
                        type="checkbox"
                        id="dark-mode-toggle"
                        className='cursor-pointer inline-block relative h-6 w-10 rounded-full appearance-none bg-VeryLightGrayBg align-middle before:content-["🌞"] before:absolute before:top-[2px] before:right-[17px] before:block before:translate-x-0 checked:bg-green-300 checked:before:translate-x-full checked:before:content-["🌛"]'
                        checked={theme === 'dark'} readOnly={true}
                    />
                    <p className='inline'>Dark Mode</p>
                </label>
            </header>
        </>
    )
}

export default Header