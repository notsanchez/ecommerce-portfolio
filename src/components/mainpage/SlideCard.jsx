import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import axios from "axios";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { render } from '@testing-library/react';

const SlideCard = () => {

    const [Sdata, setSdata] = useState(null);

    useEffect(() => {
        axios
        .get('http://localhost:8000/Sdata')
        .then(res => {
            setSdata(res.data);
        })
        .catch((err) => {
            console.log(err)
        });
    }, []);

    const setting = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        appendDots: (dots) => {
            return <ul style={{margin : "0px"}}>{dots}</ul>
        },
    };

  return (
    <>
        { Sdata && (
        <Slider {...setting}>
            {Sdata.map((value,index) => {
                return(
                    <div className="box d_flex top" key={index}>
                        <div className="left">
                            <h1>{value.title}</h1>
                            <p>{value.desc}</p>
                            <button className='btn-primary'>VER OFERTA</button>
                        </div>
                        <div className="right">
                            <img src={value.cover} alt="" />
                        </div>
                    </div>
                )
            })}
        </Slider>
        )}
    </>
  )
}

export default SlideCard