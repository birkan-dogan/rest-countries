import { useState } from "react";
import Main from "../components/Main";
import Search from "../components/Search";

const Home = () => {
  const [search, setSearch] = useState("ukraine");
  return (
    <div className="d-flex flex-column align-items-center">
      <Search setSearch={setSearch} />
      <Main search={search} />
      <div className="nowar">
        <h5>
          <a href="https://en.wikipedia.org/wiki/World_peace" target="_blank">
            #WorldPeace
          </a>
        </h5>
      </div>
    </div>
  );
};
export default Home;
