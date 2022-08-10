import { useState } from "react";
import Main from "../components/Main";
import Search from "../components/Search";

const Home = () => {
  const [search, setSearch] = useState();
  return (
    <div>
      <Search setSearch={setSearch} />
      <Main search={search} />
    </div>
  );
};
export default Home;
