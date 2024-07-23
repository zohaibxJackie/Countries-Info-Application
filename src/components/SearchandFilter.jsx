import { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const SearchandFilter = () => {
  const [countryName, setCountryName] = useState('');
  const [data, setData] = useState(null);
  const [region, setRegion] = useState('');

  const searchCountry = (event) => {
    event.preventDefault();
    const url = `https://restcountries.com/v3.1/name/${countryName}`
    fetch(url)
        .then((res) => {
            const result = res.json();
        })
        .catch((err) => {
            console.log(err);
        })
}

  const navigate = useNavigate();

  const handleSelectChange = (event) => {
    setRegion(event.target.value);
    const selectedRegion = event.target.value;

    if (selectedRegion === '') {
      navigate('/'); // Navigate to home route if region is empty
    } else {
      navigate(`/filter-result?region=${selectedRegion}`); // Navigate to show-result with query parameter
    }
  };

  return (
    <div className="my-8 flex justify-between text-HomepageItems">
      <form onSubmit={searchCountry} className="h-10 w-[18rem] shadow-md bg-white dark:bg-DarkBlue flex rounded-md">
        <span className="h-full flex items-center justify-center px-1 dark:text-white"><IoSearchSharp /></span>
        <input type="text" className="h-full w-full bg-transparent outline-none dark:text-white" onChange={(e) => { setCountryName(e.target.value) }} placeholder="Search for a country..." required />
      </form>
      <select className="w-48 text-center dark:bg-DarkBlue dark:text-white shadow-md rounded-md" onChange={handleSelectChange}>
        <option value={''}>Select by Region...</option>
        <option value={'Africa'}>Africa</option>
        <option value={'America'}>America</option>
        <option value={'Asia'}>Asia</option>
        <option value={'Europe'}>Europe</option>
        <option value={'Oceania'}>Oceania</option>
      </select>
    </div>
  );
};

export default SearchandFilter;
