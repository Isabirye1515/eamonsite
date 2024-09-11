import { Accordion, AccordionItem, AccordionToggle, AccordionContent, Button, Card, Input} from 'framework7-react';
import React, { useState } from 'react';

function Contact() {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    comment: ''
  });
  const [message, setMessage] = useState(''); // To show feedback messages

  const handleClick = () => {

    setMessage(''); // Clear message when toggling form
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:3002/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        setMessage('Email sent successfully!');
        setFormData({
          name: '',
          email: '',
          contact: '',
          comment: ''
        });
      } else {
        setMessage('Error sending email');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Network error');
    }
  };

  return (
    <>
      <Card className='reg-nav'>
        <h1>Get in Touch</h1>

        <div>
          <Accordion>
            <AccordionItem>
              <AccordionToggle><Button round small={true} fill  >Click For Contact Information</Button></AccordionToggle>
              <AccordionContent>
                <p>Address: Pack View Shopping Center</p>
                <p>Phone number: 703819029</p>
                <p>Email: eamondreads@gmail.com</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <h2 style={{color:"#ddd ",marginLeft:"3%"}} >A contact form for clients to reach out with questions or appointment requests</h2>

        
        
       <h1 style={{color:"#cc ",marginLeft:"3%"}} > SUBMIT some of your information for subscription and to know more about us.</h1>

        
          <div className='form-div'>
            <form onSubmit={handleSubmit}>
              <b><i><p className='comment'>Press Order Via Comment:</p></i></b>

              <div className="form-group">
                <label>Names:</label>
                <Input
                  className='input'
                  type='text'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <br/>

              <div className="form-group">
                <label>Email:</label>
                <Input
                  className='input'
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <br/>

              <div className="form-group">
                <label>Contact:</label>
                <Input
                  className='input'
                  type='tel'
                  name='contact'
                  value={formData.contact}
                  onChange={handleChange}
                  required
                />
              </div>
              <br/>

              <div className="form-group">
                <label>Comment:</label><br/>
                <textarea
                  className='input'
                  name='comment'
                  value={formData.comment}
                  onChange={handleChange}
                  rows="4"
                  cols="50"
                  required
                />
              </div>
              <br/>

              <div className="button-group">
                <Button fill color="blue" type="submit">Submit</Button><br/>
                <Button fill color="red" type="button" onClick={() => setFormData({ name: '', email: '', contact: '', comment: '' })}>
                  Reset
                </Button>
              </div>
              <br/>
            </form>

            {/* Displaying success or error message */}
            {message && <p className={`message ${message.includes('success') ? 'success' : 'error'}`}>{message}</p>}
          </div>
      
      </Card>
    </>
  );
}

export default Contact;
