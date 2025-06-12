import React from 'react'
import './index.css'

function background() {
  return (
    <div id='about' className='main-background'>
        <div className='container'>
            <div className='row background-row'>
                <div className='col-6'>
                    <h4 className='text-muted'>- Ben Kimim?</h4>
                    <p className='lead'>Ben Mehmet Can Beyaztaş. 2023 yılında üniversiteden mezum olduğumdan beri ABAP Uygulama Danışmanı olarak bir çok projede yer aldım. Kendimi bu alanda geliştirmek ve kariyer olarak ilerletmek istiyorum</p>
                </div>
                <div className='col-3'>
                    <h4 className='text-muted'>- Yetenekler</h4>
                    <ul className='back-ul'>
                        <li>ABAP</li>
                        <li>SAP ERP</li>
                        <li>SQL</li>
                        <li>Adobeform</li>
                        <li>Smartform</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Bootstrap</li>
                        <li>React.js</li>
                    </ul>
                </div>
            </div>
            <div className='row row-img'>
                <div className='col-3'>
                <img src={require('../../assets/man.jpg')} className='back-img' />
                </div>
                <div className='col-4'>
                <img src={require('../../assets/middle.jpg')} className='back-img img-x' />
                </div>
                <div className='col-3'>
                <img src={require('../../assets/left.jpg')} className='back-img' />
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default background
