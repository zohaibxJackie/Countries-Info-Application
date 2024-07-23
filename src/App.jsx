import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import SearchandFilter from "./components/SearchandFilter";
import SearchResult from "./components/SearchResult";

const App = () => {
  return (
    <div className="min-h-screen min-w-screen bg-VeryLightGrayBg dark:bg-VeryDarkBlueBg font-font-family max-w-[1440px]">
      <Header />
      <div className="px-2">
        <SearchandFilter />
        <Routes>
          {/* Home route */}
          <Route path="/" element={<Home />} />

          {/* Route for search results with query parameter handling */}
          <Route path="/filter-result" element={<SearchResult />}>
            <Route path=":region" element={<SearchResult />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
