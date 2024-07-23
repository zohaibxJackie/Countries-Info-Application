
const Header = ( {toggleDarkMode} ) => {
    return (
        <>
            <header className='flex items-center justify-between px-4 py-5 dark:bg-DarkBlue bg-white shadow-md'>
                <p>Where in the world?</p>
                <label htmlFor="dark-mode-toggle" className='flex gap-1 items-center cursor-pointer' onClick={toggleDarkMode} >
                    <input type="checkbox" id="dark-mode-toggle" className='cursor-pointer inline-block relative h-6 w-10 rounded-full appearance-none bg-VeryLightGrayBg align-middle before:content-["🌞"] before:absolute before:left-0 before:block before:translate-x-0 checked:bg-green-300 checked:before:translate-x-full checked:before:content-["🌛"]' />
                    <p className='inline'>Dark Mode</p>
                </label>
            </header>
        </>
    )
}

export default Header;