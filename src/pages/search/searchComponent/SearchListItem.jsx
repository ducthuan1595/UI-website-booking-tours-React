/////////////////////////////////
import styled from "./SearchListItem.module.css";

function SearchListItem(props) {
  const searchList = () => {
    console.log(props.items);
  };
  searchList();
  return (
    <>
      <div className={styled["search-list-items"]}>
        {props.items &&
          props.items.map((item, index) => {
            return (
              <div className={styled["search-list-item"]} key={index}>
                <div className={styled["search-list-item__img"]} style={{backgroundImage: `url(${item['image_url']})`}}></div>
                <div className={styled["search-list-item__content"]}>
                  <h2>{item.name}</h2>
                  <p>{`${item.distance}m from center`}</p>
                  <div className={styled["search-list-item__tag"]}>
                    {item.tag}
                  </div>
                  <div className={styled["search-list-item__desc"]}>
                    {item.description}
                  </div>
                  <div className={styled["search-list-item__type"]}>
                    {item.type}
                  </div>
                  {item["free_cancel"] && (
                    <div className={styled["search-list-item__free-cancel"]}>
                      <div>Free cancellation</div>
                      <p>You can cancel later, so look in this great today!</p>
                    </div>
                  )}
                </div>
                <div className={styled["search-list-item__rate"]}>
                  <div className={styled["search-list-item__rate-text"]}>
                    <div>{item["rate_text"]}</div>
                    <span>{item.rate}</span>
                  </div>
                  <div className={styled['search-list-item__rate-bottom']}>
                    <p
                      className={styled["search-list-item__rate-price"]}
                    >{`$${item.price}`}</p>
                    <p className={styled["search-list-item__rate-desc"]}>
                      Includes taxes and fees
                    </p>
                    <button>See availability</button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default SearchListItem;
