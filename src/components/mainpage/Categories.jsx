import React, { useEffect, useState } from 'react'
import axios from "axios";

const Categories = () => {

  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:8000/Categories')
      .then(res => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err)
      });
  }, []);

      
  return (
    <>
      {data && (
        <div className="category">
            {
                data.map((value,index) => {
                    return(
                        <div className="box f_flex" key={index}>
                            <img src={value.cateImg} alt="" />
                            <span>{value.cateName}</span>
                        </div>
                    )
                })
            }
        </div>
        )}
    </>
  )
}

export default Categories