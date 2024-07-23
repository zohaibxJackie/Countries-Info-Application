import { useEffect, useState } from "react";
import Header from "./components/Header";

const App = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme("dark");
      console.log("prefers dark");
    } else {
      setTheme("light");
      console.log("prefers light");
    }
  }, [])
  

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      console.log("dark added");
    } else {
      document.documentElement.classList.remove("dark");
      console.log("dark removed");
    }
  }, [theme])
  
  const toggleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    console.log("function called");
  }

  return (
    <>
      <div className='min-h-screen min-w-screen bg-VeryLightGrayBg dark:bg-VeryDarkBlueBg  font-font-family'>
        <Header toggleDarkMode={toggleDarkMode} />
      </div>
    </>
  )
}

export default App;