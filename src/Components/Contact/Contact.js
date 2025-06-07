import React, { useRef, useEffect, useState } from 'react';
import './Contact.css';
import { TypeAnimation } from 'react-type-animation';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

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
            'How can I connect?', 2000,
            '¡Cómo puedo conectar?', 2000,
            'आपसे संपर्क कैसे करें?', 2000,
            'Wie kann ich mich verbinden?', 2000,
            'どうやって連絡していますか。', 2000,
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
        ref={formRef}
      >
        <div className="contact-left">
          <h2>Get in Touch</h2>
          <div className="contact-item">
            <div className="contact-icon-circle">
              <FaMapMarkerAlt className="contact-icon" />
            </div>
            <p>123 Main Street, San Francisco, CA</p>
          </div>
          <div className="contact-item">
            <div className="contact-icon-circle">
              <FaPhoneAlt className="contact-icon" />
            </div>
            <p>+1 (234) 567-8901</p>
          </div>
          <div className="contact-item">
            <div className="contact-icon-circle">
              <FaEnvelope className="contact-icon" />
            </div>
            <p>contact@example.com</p>
          </div>
        </div>

        <div className="contact-right">
          <form action="https://formspree.io/f/xjvjlqeg" method="POST">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <input type="text" name="subject" placeholder="Subject" required />
            <textarea name="message" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
