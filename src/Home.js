import React, { useState } from 'react';
import data from './data';
import Model from './modal';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [model, setModel] = useState(false);
  const [tempdata, setTempdata] = useState([]);

  const getData = (id, img, title, desc, rawl, nme) => {
    let tempData = [id, img, title, desc, rawl, nme];
    setTempdata(item => [1, ...tempData]);

    return setModel(true);
  };

  return (
    <>
    <div classname='home-lyt'>
      <h1 classname="py-50">Hello, Annalectuals🤘</h1>
      <Link to="/Entry"><button className="go-back-button">
            Go back
          </button></Link>
      <section className='py-4 py-lg-5 container'>
        <div className='row justify-content-center align-item-center'>
          {data.cardData.map((item, index) => {
            return (
              <div className='col-11 col-md-6 col col-lg-3 mx-0 mb-4' key={index}>
                <div className="card p-0 overflow-hidden h-100 shadow" >
                  <img src={item.imgSrc} className="card-img-top" alt={item.title} />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.nme}</p>
                    <button className="btn btn-primary" onClick={() => getData(item.imgSrc, item.title, item.desc, item.rawl, item.nme, item.id)}>Details</button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
      </div>
      {model === true ? <Model img={tempdata[1]} title={tempdata[2]} desc={tempdata[3]} rawl={tempdata[4]} nme={tempdata[5]} id={tempdata[6]} hide={() => setModel(false)} /> : ''}
    </>
  )
}

export default Home;
