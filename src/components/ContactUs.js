import React, { useEffect } from 'react';
import '../App.css';

const ContactUs = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.cognitoforms.com/f/seamless.js';
    script.setAttribute('data-key', 'U-sz0hxjdkyHeSAXTKIM6A');
    script.setAttribute('data-form', '1');
    document.getElementsByClassName('contact-container')[0].appendChild(script);
  }, []);

  return (
    <div className="contact-container">
      {/* The form will be embedded here */}
    </div>
  );
};

export default ContactUs;
