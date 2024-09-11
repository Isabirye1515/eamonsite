import React, { useState } from 'react';

export default function Faqs() {
  const [faqs] = useState([
    { id: 1, question: "How long does dreadlocks installation take?", answer: "[Answer]" },
    { id: 2, question: "How often should I maintain my dreadlocks?", answer: "[Answer]" },
    { id: 3, question: "Can I customize my dreadlocks?", answer: "[Answer]" }
  ]);

  return (
    <div>
      <h2  style={{color:"#ddd ",marginLeft:"3%"}} >Frequently Asked Questions</h2>
      <em  style={{color:"#eee ",marginLeft:"3%"}} >Questions and answers:</em>
      {faqs.map((faq) => (
        <div key={faq.id}>
          <p  style={{color:"#fff ",marginLeft:"3%"}} ><strong>Q:</strong> {faq.question}</p>
          <p  style={{color:"#ddd ",marginLeft:"3%"}} ><strong>A:</strong> {faq.answer}</p>
        </div>
      ))}
    </div>
  );
}
