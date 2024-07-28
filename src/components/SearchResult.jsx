import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
const SearchResult = ({ data }) => {
    if (data === null) {
        alert("There was some error");
        navigate("/");
    }
    const navigate = useNavigate();
    const langcode = Object.keys(data[0].name.nativeName)[0];
    const nativename = data[0].name.nativeName[langcode].common;
    const currency = Object.keys(data[0].currencies)[0];
    const currencyName = data[0].currencies[currency].name;
    return (
        <>
        { (data === null) ? "No results found" :
            <div>
                <div className="ml-10 my-10">
                    <button className="shadow-md dark:bg-DarkBlue bg-white px-5 py-1 cursor-pointer dark:text-white text-HomepageItems opacity-75 flex items-center gap-2" onClick={() => { navigate(-1) }}><span><FaArrowLeft /></span> Back</button>
                </div>
                <div className="flex justify-around gap-8 max-md:flex-col">
                    <div className="h-[18rem] max-md:h-[12rem] min-w-[40%] max-md:flex max-md:justify-center max-md:items-center max-md:min-w-[unset]">
                        <img src={data[0].flags.png} alt="flag-image" className="min-w-full max-md:min-w-[unset]" />
                    </div>
                    <div className="dark:text-white text-DetailPage flex flex-col justify-center gap-8 items-center">
                        <div>
                            <h1 className="font-fw-800 text-3xl">{data[0].name.common}</h1>
                        </div>

                        <div className="flex gap-6 max-sm:flex-col">
                            <div>
                                <p>Native Name: <span className="dark:text-white opacity-DetailedPageOpacity">{nativename}</span></p>
                                <p>Population: <span className="dark:text-white opacity-DetailedPageOpacity">{data[0].population}</span></p>
                                <p>Region: <span className="dark:text-white opacity-DetailedPageOpacity">{data[0].region}</span></p>
                                <p>Sub Region: <span className="dark:text-white opacity-DetailedPageOpacity">{data[0].subregion}</span></p>
                                <p>Capital: <span className="dark:text-white opacity-DetailedPageOpacity">{data[0].capital[0]}</span></p>
                            </div>
                            <div>
                                <p>Top Level Domain: <span className="dark:text-white opacity-DetailedPageOpacity">{data[0].tld[0]}</span></p>
                                <p>Currencies: <span className="dark:text-white opacity-DetailedPageOpacity">{currencyName}</span></p>
                                <p>Languages: {
                                    Object.keys(data[0].languages).map(key => (
                                        <span key={key} className="dark:text-white opacity-DetailedPageOpacity">{data[0].languages[key]} </span>
                                    ))
                                }</p>
                            </div>
                        </div>

                        <div className="flex gap-6 max-md:flex-col">
                            <p className="max-md:text-center max-sm:text-center">Border Countries: </p>
                            <div className="flex gap-3 flex-wrap items-center justify-center max-md:mb-4">
                                {(!data[0].borders) ? "Not Available" :
                                    data[0].borders.map((e, key) => (
                                        <span key={key} className="px-6 dark:bg-DarkBlue bg-white shadow">{e}</span>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }
        </>
    )
}

export default SearchResult;