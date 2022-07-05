import React from 'react'

const Head = () => {
  return (
    <>
        <section className="head">
            <div className="container d_flex">
                <div className="left row">
                    <i className='fa fa-phone'></i>
                    <label>(11) 9999-99999</label>
                    <i className='fa fa-envelope'></i>
                    <label>email@email.com</label>
                </div>
                <div className="right row RText">
                    <label>Sobre nós</label>
                    <span></span>
                    <label>PT</label>
                    <label>BRL</label>
                </div>
            </div>
        </section>
    </>
  )
}

export default Head