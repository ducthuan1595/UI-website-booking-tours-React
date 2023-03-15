//////////////////////////////////////
import styled from './ContentDetail.module.css';

function ContentDetail (props) {

  const detail = props.detail;
  console.log(detail)

  return (
    <>
      <div className={styled.detail}>
        <div className={styled['detail-top']}>
          <div className={styled['detail-top__right']}>
            <h1 className={styled['detail-top__right-name']}>{detail.name}</h1>
            <p className={styled['detail-top__right-address']}><i className="fas fa-map-marker-alt"></i>{detail.address}</p>
            <div className={styled['detail-top__right-distance']}>{detail.distance}</div>
            <div className={styled['detail-top__right-price']}>{detail.price}</div>
          </div>
          <div className={styled['detail-top__left']}>
            <button>Reserve or Book Now!</button>
          </div>
        </div>
        <div className={styled['detail-center']}>
          {detail.photos.map((photo, index)=> {
            return <div style={{backgroundImage: `url(${photo})`}} key={index} className={styled['detail-center__photos']}></div>
          })} 
        </div>
        {/* detail bottom */}
        <div className={styled['detail-bottom']}>
          <div className={styled['detail-bottom__left']}>
            <h2>{detail.title}</h2>
            <p>{detail.description}</p>
          </div>
          <div className={styled['detail-bottom__right']}>
            <h3>Perfect for a 9-night stay!</h3>
            <p>Located in the real heart of Krakow, this property has an excellent location score of 9.8!</p>
            <div className={styled['detail-bottom__right-price']}><span>{`$${detail['nine_night_price']} `}</span>(9 nights)</div>
            <button>Reserve or Book Now!</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContentDetail;