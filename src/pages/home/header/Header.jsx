import React, { useState, useEffect } from "react";

import styled from "./Header.module.css";
import InputSearch from "./InputSearch";
import DatePicker from "../../Date/Date";

function Header() {
  const [isDate, setIsDay] = useState(false);
  const [date, setDate] = useState()

  return (
    <div className={styled["header"]}>
      <div className={styled['head']}>
        <div>
          <h1 className={styled["head-title"]}>
            A lifetime of discounts? It's Genius.
          </h1>
          <p className={styled["head-desc"]}>
            Get rewarded for your travels - unlock instant savings of 100% or
            more with a free account
          </p>
          <button className={styled["btn-login"]}>Sign in / Register</button>
        </div>
      </div>
      <InputSearch isDates={setIsDay} setDate={date} />
      {isDate && 
      <DatePicker getDay={setDate} />
      }
    </div>
  );
}

export default Header;
