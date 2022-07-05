import React from 'react'

const Catg = () => {
    const data = [
        {
          cateName: "Apple",
        },
        {
          cateName: "Samasung",
        },
        {
          cateName: "Oppo",
        },
        {
          cateName: "Vivo",
        },
        {
          cateName: "Redimi",
        },
        {
          cateName: "Sony",
        },
      ]

      return (
        <>
          <div className='category'>
            <div className='chead d_flex'>
              <h1>Marcas</h1>
            </div>
            {data.map((value, index) => {
              return (
                <div className='box f_flex' key={index}>
                  <span>{value.cateName}</span>
                </div>
              )
            })}
            <div className='box box2'>
              <button>Ver todas as marcas</button>
            </div>
          </div>
        </>
      )
    }

export default Catg