//////////////////////////////////
import styled from './TypeHotels.module.css'

const hotels = [
	{
		"name": "Hotels",
		"count": 233,
		"image": "./images/type_1.webp"
	},
	{
		"name": "Apartments",
		"count": 2331,
		"image": "./images/type_2.jpg"
	},
	{
		"name": "Resorts",
		"count": 2331,
		"image": "./images/type_3.jpg"
	},
	{
		"name": "Villas",
		"count": 2331,
		"image": "./images/type_4.jpg"
	},
	{
		"name": "Cabins",
		"count": 2331,
		"image": "./images/type_5.jpg"
	}
];


function TypeHotels () {
  return (
    <div className={styled.hotels}>
      {hotels &&
        hotels.map((hotel, index) => {
          return (
            <div key={index} className={styled.hotel}>
              <div
                className={styled["hotel-img"]}
                style={{ backgroundImage: `url(${hotel.image})` }}
              ></div>
                <div className={styled["hotel-name"]}>{hotel.name}</div>
              <div className={styled["hotel-container"]}>
                <span className={styled['hotel-price']}>{hotel.count}</span>
                <p className={styled["hotel-desc"]}>hotels</p>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default TypeHotels;