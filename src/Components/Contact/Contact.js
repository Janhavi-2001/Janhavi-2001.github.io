import React, { useRef, useEffect, useState } from 'react';
import './Contact.css';
import { TypeAnimation } from 'react-type-animation';

const Contact = () => {
  const formRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry], observer) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    },
    { threshold: 0.2 }
  );

  if (formRef.current) observer.observe(formRef.current);
    return () => observer.disconnect();
    }, []);

  return (
    <section className="contact-wrapper" id="contact">
      <h1 className="type-animation contact-heading">
        {'print("'}
        <TypeAnimation
          sequence={[
            'Contact', 2000,
            'お問い合わせ', 2000,
            'Contacto', 2000,
            'Kontaktieren', 2000,
            '联系我', 2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          deletionSpeed={30}
        />
        {'")'}
      </h1>

      <div
        className={`contact-container ${isVisible ? 'fade-in' : ''}`}
        ref={formRef}>
        <div className="contact-right">
          <form action="https://formspree.io/f/xjvjlqeg" method="POST">
            <div className="name-fields">
              <input type="text" name="firstName" placeholder="First Name" required />
              <input type="text" name="lastName" placeholder="Last Name" required />
            </div>            
            <input type="email" name="email" placeholder="Email" required />
            <textarea type = "text" name="message" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
