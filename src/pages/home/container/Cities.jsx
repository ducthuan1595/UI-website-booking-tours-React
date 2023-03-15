////////////////////////////////////////////
import styled from "./Cities.module.css";

const cities = [
  {
    name: "Dublin",
    subText: "123 properties",
    image: "./images/city_1.webp",
  },
  {
    name: "Reno",
    subText: "533 properties",
    image: "./images/city_2.webp",
  },
  {
    name: "Austin",
    subText: "532 properties",
    image: "./images/city_3.webp",
  },
];

function Cities() {
  return (
    <div className={styled.cities}>
      {cities &&
        cities.map((city, index) => {
          return (
            <div key={index} className={styled.city}>
              <div
                className={styled["city-img"]}
                style={{ backgroundImage: `url(${city.image})` }}
              ></div>
              <div className={styled["city-container"]}>
                <div className={styled["city-name"]}>{city.name}</div>
                <p className={styled["city-desc"]}>{city.subText}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Cities;
