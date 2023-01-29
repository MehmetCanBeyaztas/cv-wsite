import React from 'react'
import './index.css'

function background() {
  return (
    <div id='about' className='main-background'>
        <div className='container'>
            <div className='row background-row'>
                <div className='col-6'>
                    <h4 className='text-muted'>- Ben Kimim?</h4>
                    <p className='lead'>Ben Mehmet Can Beyaztaş. Ankara Yıldırım Beyazıt Üniversitesi Yönetim Bilişim Sistemleri 4.sınıf öğrencisiyim. Boş zamanlarımda kendimi alanım ile geliştirmeye çalışıyorum. Kodlarla uğraşmaktan hoşlanıyor ve kendimi bu alanda geliştiriyorum. Bu bağlamda şimdilik kendimi geliştirmeye adadığım alan UI/UX ve Front-End Develop. Arta kalan diğer zamanlarımda ise üniversitemin tiyatro kulübü ile amatör ama profesyonel bir ruhla oyunlarımızı sergilemek amacıyla çalışmalar düzenliyor ve seyirci ile buluşuyoruz</p>
                </div>
                <div className='col-3'>
                    <h4 className='text-muted'>- Yetenekler</h4>
                    <ul className='back-ul'>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Bootstrap</li>
                        <li>React.js</li>
                        <li>Next.js</li>
                    </ul>
                </div>
            </div>
            <div className='row row-img'>
                <div className='col-3'>
                <img src={require('../../assets/takim.jpg')} className='back-img' />
                </div>
                <div className='col-5'>
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
