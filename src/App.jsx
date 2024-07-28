import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import SearchandFilter from "./components/SearchandFilter";
import FilterResult from "./components/FilterResult";
import SearchResult from "./components/SearchResult";
import { useEffect, useState } from "react";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState(null);
  const handleData = (e) => {
    setData(e);
    navigate('/search-result');
  }

  return (
    <div className="min-h-screen min-w-screen bg-VeryLightGrayBg dark:bg-VeryDarkBlueBg font-font-family max-w-[1440px]">
      <Header />
      <div className="px-2">
        {(location.pathname === '/' || location.pathname.startsWith('/filter-result')) && <SearchandFilter data={data} onData={handleData} />}
        <Routes>
          {/* Home route */}
          <Route path="/" element={<Home />} />

          {/* Route for search results with query parameter handling */}
          <Route path="/filter-result" element={<FilterResult />}>
            <Route path=":region" element={<FilterResult />} />
          </Route>
          <Route path="/search-result" element={<SearchResult data={data} />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
