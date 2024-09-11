import { Button, Link } from 'framework7-react';
import React, { useState } from 'react';

export default function Footer() {
  const [days, setDays] = useState(false);
const url = "https://www.google.com/maps/uv?pb=!1s0x177dbd0030f1c41b%3A0x38c2996249a4c145!3m1!7e115!4s%2Fmaps%2Fplace%2Feamon%2Bdreads%2F%400.3132406%2C32.5764346%2C3a%2C75y%2C10.07h%2C90t%2Fdata%3D*213m4*211e1*213m2*211sMyoruxfGuTc3alhrqKz_gQ*212e0*214m2*213m1*211s0x177dbd0030f1c41b%3A0x38c2996249a4c145%3Fsa%3DX%26ved%3D2ahUKEwj735yB9JyIAxW-h_0HHc-iEXMQpx96BAgTEAA!5seamon%20dreads%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e2!2sMyoruxfGuTc3alhrqKz_gQ&cr=le_a7&hl=en&ved=1t%3A206134&ictx=111"
  // Function to toggle working days visibility
  const tel = "tel:0703819029"
  const toggleDays = () => {
    setDays(prevDays => !prevDays);
  };

  return (
    <div className="footer">
      <div>
        <p style={{fontSize:"20px"}} >We are Located at the Park View Shopping Center</p>
        <Link href={url} target="_blank" external > Directions </Link>
        <Link  href={tel} external  >Call</Link>
        <Button  round small={true} fill  onClick={toggleDays}>Working Days</Button>
      </div>

      {days && (
        <table>
          <tr>
            <th>week days</th>
            </tr>
            <tr>
          <td>
            <p>Sunday 24 hrs</p>
            <p>Monday 24 hrs</p>
            <p>Tuesday 24 hrs</p>
            <p>Wenesday 24 hrs</p>
            <p>Thursday 24 hrs</p>
            <p>Friday 24 hrs</p>
          
            </td>
          
        </tr>
        </table>
        
      )}
    </div>
  );
}