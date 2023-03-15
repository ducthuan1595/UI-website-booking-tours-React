///////////////////////////////////
import React, { useState, useEffect, useRef } from "react";

import styled from "./InputSearch.module.css";

function InputSearch(props) {

  const [changeDate, setChangeDate] = useState({
    startDate: new Date(),
    endDate: new Date()
  })

  const inputRef = useRef();

  // handle event next search page
  const handleNextSearch = (e) => {
    window.location.replace("/search");
  };

  const handleClickDate = () => {
    // console.log(props.getDay)
    props.isDates(true);
  }

  useEffect(()=> {
    if(props.setDate && props.setDate[0].endDate !== null && props.setDate[0].startDate !== props.setDate[0].endDate) {
      setChangeDate(props.setDate[0])
      props.isDates(false);
    }
  }, [props.setDate])

  // useEffect(()=> {
  //   inputRef.current.value = changeDate.startDate.toLocaleDateString();
  // })
  
  return (
    <>
      <div className={styled["input-search"]}>
        <input
          className={styled["input-search-field"]}
          style={{ fontFamily: "Arial, FontAwesome" }}
          placeholder="&#xf236;   Where are you going?"
        />
        <div className={styled['input-search-group']}>
        <i className="fas fa-calendar-alt"></i>
        <input
            className={styled["input-search-field"]}
            id={styled['input-search-first-child']}
            style={{fontFamily:'Arial, FontAwesome'}}
            type="text"
            placeholder="&#xf073;   14/02/2023"
            value={changeDate.startDate.toLocaleDateString()}
            onClick={handleClickDate}
            ref={inputRef}
          />
          <p>to</p>
          <input
            className={styled["input-search-field"]}
            style={{fontFamily:'Arial, FontAwesome'}}
            type="text"
            placeholder="24/06/2023"
            value={changeDate.endDate.toLocaleDateString()}
            onClick={handleClickDate}
            ref={inputRef}
          />
        </div>
        <input
          className={styled["input-search-field"]}
          style={{ fontFamily: "Arial, FontAwesome" }}
          type="text"
          placeholder="&#xf182;  1 adult · 0 children · 1 room"
        />
        <button className={styled["btn-search"]} onClick={handleNextSearch}>
          Search
        </button>
      </div>
    </>
  );
}

export default InputSearch;
