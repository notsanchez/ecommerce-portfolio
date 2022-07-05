import React from "react"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1>SanchezShop</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p>
            <div className='icon d_flex'>
              <div className='img d_flex'>
                <i class='fa-brands fa-google-play'></i>
                <span>Google Play</span>
              </div>
              <div className='img d_flex'>
                <i class='fa-brands fa-app-store-ios'></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className='box'>
            <h2>Sobre nós</h2>
            <ul>
              <li>Nossa história</li>
              <li>Temos & Cndições</li>
              <li>Termos De Privacidade</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Area do cliente</h2>
            <ul>
              <li>Suporte</li>
              <li>Como comprar</li>
              <li>Acompanhe seu pedido</li>
              <li>Politicas de reembolso</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Entre em contato</h2>
            <ul>
              <li>São Paulo, SP </li>
              <li>Email: email@email.com</li>
              <li>Teleone: (11) 9999-99999</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer