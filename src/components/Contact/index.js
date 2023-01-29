import React from 'react'
import './index.css'

function contact() {
  return (
    <div id='contact' className='contact-main'>
        <div className='container'>
            <div className='row contact-row'>
                <div className='col-6'>
                    <h1 className='contact-text'>İletişim</h1>
                    <form action="https://formspree.io/f/xyyazvgb" method="POST">
                    <div className='mb-3'>
                        <input type="name" className="form-control" id="name" name="Name"placeholder='Adınız' required/>
                    </div>
                    <div className='mb-3'>
                        <input type="surname" className="form-control" id="surname" name="Surname" placeholder='Soyadınız' required/>
                    </div>
                    <div className='mb-3'>
                        <input type="email" className="form-control" name="E-Mail"id="surname" placeholder='E-mail adresiniz' required/>
                    </div>
                    <div class="mb-3">
                    <textarea name="Message" id="text" rows="5" class="form-control" placeholder='Mesajınız...' required></textarea>
                    </div>
                    <div className='submit'>
                        <button type="submit" className="btn btn-primary">Gönder</button>
                    </div>
                    </form>                    

    
                </div>
                <div className='col-6'>
                    <h1 className='contact-text x'>Sosyal Medya</h1>
                    <div className='social-links'>
                        <a className='social-link insta' href='https://www.instagram.com/mcanbeyaztas/' target="_blank"><i class="fa-brands fa-instagram"></i></a>
                        <a className='social-link linkedin' href='https://www.linkedin.com/in/mehmet-can-beyazta%C5%9F-28a70a233/' target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default contact
