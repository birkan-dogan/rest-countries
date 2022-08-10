import { useState } from "react";

const Search = ({ setSearch }) => {
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(name);
    // console.log(name);
    setName("");
  };
  return (
    <form className="input-group m-5 text-center w-50" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control"
        placeholder="Enter Country Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        className="btn btn-outline-secondary bg-danger text-white w-25"
        type="button"
        id="button-addon2"
      >
        Search
      </button>
    </form>
  );
};
export default Search;
