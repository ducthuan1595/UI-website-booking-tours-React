//////////////////////////////////
import styled from './ListHotel.module.css'

const listHotel = [
	{
		"name": "Aparthotel Stare Miasto",
		"city": "Madrid",
		"price": 120,
		"rate": 8.9,
		"type": "Excellent",
		"image_url": "./images/hotel_1.webp"
	},
	{
		"name": "Comfort Suites Airport",
		"city": "Austin",
		"price": 140,
		"rate": 9.3,
		"type": "Exceptional",
		"image_url": "./images/hotel_2.jpg"
	},
	{
		"name": "Four Seasons Hotel",
		"city": "Lisbon",
		"price": 99,
		"rate": 8.8,
		"type": "Excellent",
		"image_url": "./images/hotel_3.jpg"
	},
	{
		"name": "Hilton Garden Inn",
		"city": "Berlin",
		"price": 105,
		"rate": 8.9,
		"type": "Excellent",
		"image_url": "./images/hotel_4.jpg"
	}
]



function ListHotel () {
  return (
    <>
    <div className={styled.hotels}>
      {listHotel &&
        listHotel.map((hotel, index) => {
          return (
            <div key={index} className={styled.hotel}>
              <div
                className={styled["hotel-img"]}
                style={{ backgroundImage: `url(${hotel['image_url']})` }}
              ></div>
                <a href='../../detail' className={styled["hotel-name"]}>{hotel.name}</a>
                <p className={styled["hotel-city"]}>{hotel.city}</p>
                <div className={styled['hotel-price']}>{`Starting from $${hotel.price}`}</div>
              <div className={styled["hotel-container"]}>
                <span className={styled['hotel-rate']}>{hotel.rate}</span>
                <p>{hotel.type}</p>
              </div>
            </div>
          );
        })}
    </div>
    </>
  );
}

export default ListHotel;