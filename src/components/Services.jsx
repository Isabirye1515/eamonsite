import React, { useState } from 'react';
import one from '../assets/pics/first.jpg';
import two from '../assets/pics/second.jpg';
import three from '../assets/pics/third.jpg';
import four from '../assets/pics/forth.jpg';
import five from '../assets/pics/fifth.jpg';

export default function Services() {
  const [services] = useState([
    { id: 1, name: "Dreadlocks installation", photo: one },
    { id: 2, name: "Maintenance and repair", photo: two },
    { id: 3, name: "Loc extensions", photo: three },
    { id: 4, name: "Styling and design", photo: four },
    { id: 5, name: "Consultations", photo: five },
  ]);

  return (
    <div>
      <h2 style={{color:"#ddd ",marginLeft:"3%"}} > Dreadlocks Services</h2>
      <h3>From installation to maintenance, we've got you covered.</h3>
      <h3><b><i>List of services:</i></b></h3>
      <div className="datas" >
      {services.map(service => (
        <div  className="data" key={service.id}>
          <h4>{service.name}</h4>
          <hr />
          <img src={service.photo} height={70} width={70} alt={service.name} />
        </div>
      ))}
      </div>
     
    </div>
  );
}
