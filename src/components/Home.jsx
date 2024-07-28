import fileData from '../assets/data.json'

const Home = ({onData, data}) => {
  const handleData = async (e) => {
     // Validate country name (optional)
     if (e.trim() === "") {
      alert("Please enter a country name to search.");
      return;
    }

    try {
      const url = `https://restcountries.com/v3.1/name/${e}`;
      const response = await fetch(url); // Use async/await for cleaner syntax
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      await onData(result); // Store fetched data for potential display
    } catch (error) {
      console.error("Error fetching country data:", error);
    }
  }
  return (
    <>
      {/* <SearchandFilter /> */}
      <div className='grid gap-8 px-8 grid-cols-autofit'>
        {
          fileData.map((currentValue, index) => (
            <div key={index} onClick={() => {handleData(currentValue.name)}} className='cart grid grid-rows-subgrid row-span-2 dark:bg-DarkBlue rounded-md bg-white shadow-md text-country-card-item cursor-pointer'>
              <img src={currentValue.flags.png} alt="flag" className='max-w-full w-full' />
              <div className='dark:text-white pl-4 pb-8'>
                <p>{currentValue.name}</p>
                <p>Population: <span>{currentValue.population}</span></p>
                <p>Region: <span>{currentValue.region}</span></p>
                <p>Capital: <span>{currentValue.capital}</span></p>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Home;