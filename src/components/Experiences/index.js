import React from 'react'
import './index.css'

function experience() {
  return (
    <div id='experience' className='main-experience'>
      <div className='container'>
        <div className='row experience-row row-first'>
            <div className='col-4'>
                <h4 className='text-muted'>- İş Deneyimleri</h4>
            </div>
            <div className='col-8'>
                <h4>ABAP Uygulama Danışmanı</h4>
                <p>Arete Consulting / May 2023 - Devam Ediyor</p>
                <p className='lead'>Burada bir çok S4H projesinde yer alma fırsatı yakaladım. Yer aldığım projelerde genel olarak rapor ekranlarının baştan uca tasarlanması ve Adobeform kullanılarak yapılan çıktı işlemlerinin tasarımının ve çıktsının alınması tarafında çalıştım ve çalışmaya da devam ediyorum.</p>
                <br/>
                <br/>              
                <h4>Jr. Frontend Developer</h4>
                <p>TrAir Teknoloji Yatırımları A.Ş. / Kas 2022 - Ara 2022</p>
                <p className='lead'>Burada Frontend ile alakalı bir çok şey öğrendim. Her ne kadar kısa bir süre çalışma fırsatı bulmuş olsam da bana iş deneyimi konusunda bir çok şey kattı.</p>
                <br/>
                <br/>
                <h4>Stajer</h4>
                <p>Turna Teknoloji A.Ş. / Tem 2022 - Ağu 2022</p>
                <br/>
                <br/>
                <h4>Brand Representative</h4>
                <p>Ecodation / Nis 2022 - Tem 2022</p>
                <p className='lead'>Bir süre kampüsümün marka temsilcisi olduktan sonra farklı departmanlar arasında geçiş yaptım. Fakat içinde bulunduğum son departmanın beni tatmin etmemesi ve okul sürecimin zorlukları bir araya gelince bırakmak zorunda kaldım.
                </p>
            </div>
        </div>
        <div className='row experience-row'>
            <div className='col-4'>
            <h4 className='text-muted'>- Eğitim</h4> 
            </div>
            <div className='col-8'>
                <h4>Ankara Yıldırım Beyazıt Üniversitesi</h4>
                <p>Managment Information System (ENG)</p>
                <p>Lisans Eğitimi - 2018 - 2023</p>
                <p>AGNO: 3,30</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default experience
