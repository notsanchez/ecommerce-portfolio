import React from 'react'
import Ddata from './Ddata'
import Slider from 'react-slick';

const Dcard = () => {

    const setting = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
    };

  return (
    <>
        <Slider {...setting}>
        {Ddata.map((val,index) => {
            return(
                <>
                    <div className="product" key={index}>
                        <div className="box">
                            <div className="img">
                                <img src={val.cover} alt="" width='100%' />
                            </div>
                            <h4>{val.name}</h4>
                            <span>R{val.price}.00</span>
                        </div>
                    </div>
                </>
            )
        })}
        </Slider>
    </>
  )
}

export default Dcard