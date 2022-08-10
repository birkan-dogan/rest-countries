import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

const Main = ({ search }) => {
  const [countries, setCountries] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState("");
  const [searchList, setSearchList] = useState([]);
  //   console.log(search);
  //   console.log(searchList);
  const getData = async () => {
    try {
      if (!searchList.includes(search)) {
        const res = await fetch(
          `https://restcountries.com/v3.1/name/${search}`
        );
        if (res.status == 404) {
          throw new Error();
        }
        const data = await res.json();
        setCountries([...countries, data]);
        setSearchList([...searchList, search]);
      } else {
        setError("Already exist");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, [search]);
  //   console.log(countries);
  setTimeout(() => {
    setError("");
  }, 4000);
  return (
    <div>
      <h1 className="m-4">{error}</h1>
      <div className="card-display">
        <CountryCard countries={countries} />
      </div>
    </div>
  );
};

export default Main;
