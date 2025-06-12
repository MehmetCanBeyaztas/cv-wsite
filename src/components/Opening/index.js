import React from 'react'
import './index.css'

function opening() {
  return (
  <div className=' main-opening'> 
    <div className='container'>
        <div className='row'>
            <div className='col middle-texts'>
                <h1 className='middle-text'>Merhaba, ben</h1>
                <br/>
                <h1 className='middle-text-name'>M<span>ehmet</span> C<span>an</span> B<span>eyaztaş</span></h1>
                <br/>
                <br/>
                <h1 className='middle-text'>ABAP Uygulama Danışmanı</h1>

            </div>
            <div className='col middle-img'>
            <img src={require('../../assets/developer-activity-rafiki.png')} className='img' />
            </div>
        </div>
    </div>
  </div>   
  )
}

export default opening
