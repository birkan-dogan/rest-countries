import { useEffect, useState } from "react";

const Search = ({ setSearch }) => {
  const [name, setName] = useState("");
  const [allCountries, setAllCountries] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(name);
    // console.log(name);
    setName("");
  };
  const getData = async () => {
    try {
      const res = await fetch(`https://restcountries.com/v3.1/all`);
      if (res.status == 404) {
        throw new Error();
      }
      const data = await res.json();
      const result = data.sort((a, b) =>
        a.name.common !== b.name.common
          ? a.name.common < b.name.common
            ? -1
            : 1
          : 0
      );
      //   console.log(result);
      setAllCountries(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const handleValue = (e) => {
    setSearch(e.target.innerHTML);
  };
  return (
    <div className="w-50 mt-5 d-flex  align-items-center flex-column ">
      <form
        className="input-group mb-2  text-center w-50"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="form-control"
          placeholder="Enter Country Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          className="btn btn-outline-secondary bg-danger text-white"
          type="button"
          id="button-addon2"
        >
          Search
        </button>
      </form>
      <div className="dropdown-center w-75">
        <button
          className="btn btn-secondary dropdown-toggle w-50"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Search Countries
        </button>
        <ul className="dropdown-menu w-75 p-2 list">
          {allCountries?.map((item, index) => {
            const {
              name: { common },
            } = item;
            return (
              <li className="w-50 item" key={index} onClick={handleValue}>
                {common == "Antarctica" ? null : common}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Search;
