import data from '../assets/data.json'

const Home = () => {
  return (
    <div className='grid gap-8 px-8 grid-cols-autofit'>
      {
        data.map((currentValue, index) => (
          <div key={index} className='cart grid grid-rows-subgrid row-span-2 dark:bg-DarkBlue rounded-md bg-white shadow-md text-country-card-item'>
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
  )
}

export default Home;