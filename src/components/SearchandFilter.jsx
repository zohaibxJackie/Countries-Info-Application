import { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const SearchandFilter = ({onData, data}) => {
  const [countryName, setCountryName] = useState("");

  const [region, setRegion] = useState("");

  const navigate = useNavigate();

  const searchCountry = async (event) => {
    event.preventDefault();

    // Validate country name (optional)
    if (countryName.trim() === "") {
      alert("Please enter a country name to search.");
      return;
    }

    try {
      const url = `https://restcountries.com/v3.1/name/${countryName}`;
      const response = await fetch(url); // Use async/await for cleaner syntax
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      await onData(result); // Store fetched data for potential display
    } catch (error) {
      console.error("Error fetching country data:", error);
    }
  };

  const handleSelectChange = (event) => {
    setRegion(event.target.value);
    const selectedRegion = event.target.value;

    if (selectedRegion === "") {
      navigate("/"); // Navigate to home route if region is empty
    } else {
      navigate(`/filter-result?region=${selectedRegion}`); // Navigate with query parameter
    }
  };

  return (
    <div className="my-8 flex justify-between text-HomepageItems">
      <form onSubmit={searchCountry} className="h-10 w-[18rem] shadow-md bg-white dark:bg-DarkBlue flex rounded-md">
        <span className="h-full flex items-center justify-center px-1 dark:text-white"><IoSearchSharp /></span>
        <input
          type="text"
          className="h-full w-full bg-transparent outline-none dark:text-white"
          onChange={(e) => setCountryName(e.target.value)}
          placeholder="Search for a country..."
          required
        />
      </form>
      <select
        className="w-48 text-center dark:bg-DarkBlue dark:text-white shadow-md rounded-md cursor-pointer"
        onChange={handleSelectChange}
        value={region} // Set initial selected value
      >
        <option value="">Select by Region...</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default SearchandFilter;
