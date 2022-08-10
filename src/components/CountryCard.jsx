import React from "react";
import { FaLanguage } from "react-icons/fa";
import { GrCurrency } from "react-icons/gr";
import { GiEarthAmerica } from "react-icons/gi";

const CountryCard = ({ countries }) => {
  console.log(countries);
  return (
    <div className="d-flex">
      {countries?.map((item) =>
        item?.map((country, index) => {
          const {
            flags: { svg },
            name: { common },
            region,
            currencies,
            languages,
          } = country;
          return (
            <div className="card" style={{ width: "18rem" }} key={index}>
              <img src={svg} className="card-img-top flag-img" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{common}</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <FaLanguage
                    style={{ transform: "scale(1.5)" }}
                    className="m-2 text-danger"
                  />
                  {Object.values(languages)}
                </li>
                <li className="list-group-item">
                  <GrCurrency
                    style={{ transform: "scale(1.5)" }}
                    className="m-2"
                  />
                  {Object.values(currencies)[0].name}
                  {` `}
                  {Object.values(currencies)[0].symbol}
                </li>
                <li className="list-group-item">
                  <GiEarthAmerica
                    style={{ transform: "scale(1.5)" }}
                    className="m-2 text-success"
                  />
                  {region}
                </li>
              </ul>
              {/* <div className="card-body">
                <a href="#" className="card-link">
                  Card link
                </a>
                <a href="#" className="card-link">
                  Another link
                </a>
              </div> */}
            </div>
          );
        })
      )}
    </div>
  );
};

export default CountryCard;
