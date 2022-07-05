import React from "react"
import "./style.css"

const Wrapper = () => {
  const data = [
    {
      cover: <i class='fa-solid fa-truck-fast'></i>,
      title: "Frete Gratis para todo brasil",
      decs: "lorem ipsun",
    },
    {
      cover: <i class='fa-solid fa-id-card'></i>,
      title: "Pagamento Seguro",
      decs: "lorem ipsun",
    },
    {
      cover: <i class='fa-solid fa-shield'></i>,
      title: "Seus dados em segurança",
      decs: "lorem ipsun",
    },
    {
      cover: <i class='fa-solid fa-headset'></i>,
      title: "Suporte 24 horas por dia 7 dias por semana",
      decs: "lorem ipsun",
    },
  ]
  return (
    <>
      <section className='wrapper background'>
        <div className='container grid2'>
          {data.map((val, index) => {
            return (
              <div className='product' key={index}>
                <div className='img icon-circle'>
                  <i>{val.cover}</i>
                </div>
                <h3>{val.title}</h3>
                <p>{val.decs}</p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Wrapper