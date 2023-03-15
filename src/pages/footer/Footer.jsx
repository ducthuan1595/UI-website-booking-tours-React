///////////////////////////////////////////
import styled from "./Footer.module.css";

const footers = [
  {
    col_number: 1,
    col_values: [
      "Countries",
      "Regions",
      "Cities",
      "Districts",
      "Airports",
      "Hotels",
    ],
  },
  {
    col_number: 2,
    col_values: [
      "Homes",
      "Apartments",
      "Resorts",
      "Villas",
      "Hostels",
      "Guest houses",
    ],
  },
  {
    col_number: 3,
    col_values: [
      "Unique places to stay",
      "Reviews",
      "Unpacked: Travel articles",
      "Travel communities",
      "Seasonal and holiday deals",
    ],
  },
  {
    col_number: 4,
    col_values: [
      "Car rental",
      "Flight Finder",
      "Restaurant reservations",
      "Travel Agents",
    ],
  },
  {
    col_number: 5,
    col_values: [
      "Curtomer Service",
      "Partner Help",
      "Careers",
      "Sustainability",
      "Press center",
      "Safety Resource Center",
      "Investor relations",
      "Terms & conditions",
    ],
  },
];
const footerEl = footers.map((item) => item["col_values"]);

function Footer() {
  return (
    <>
    <div className={styled.footer}>
      <div className={styled["footer-col"]}>
        {footerEl &&
          footerEl[0].map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
      </div>
      <div className={styled["footer-col"]}>
        {footerEl &&
          footerEl[1].map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
      </div>
      <div className={styled["footer-col"]}>
        {footerEl &&
          footerEl[2].map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
      </div>
      <div className={styled["footer-col"]}>
        {footerEl &&
          footerEl[3].map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
      </div>
      <div className={styled["footer-col"]}>
        {footerEl &&
          footerEl[4].map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
      </div>
    </div>
    </>
  );
}

export default Footer;
