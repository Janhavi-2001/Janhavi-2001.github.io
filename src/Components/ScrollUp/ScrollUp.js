import React, { useState, useEffect } from 'react';
import './ScrollUp.css';
import { FaAngleDoubleUp } from "react-icons/fa";

const GoTop = (props) => {
  return (
    <>
      <div className={props.showGoTop} onClick={props.scrollUp}>
        <button className="goTop">
          <FaAngleDoubleUp className="goTop__icon" />
        </button>
      </div>
    </>
  );
};

const ScrollUp = () => {
  const [showGoTop, setShowGoTop] = useState('goTop__hidden');

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowGoTop('goTop__visible');
      } else {
        setShowGoTop('goTop__hidden');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <GoTop showGoTop={showGoTop} scrollUp={scrollUp} />;
}

export default ScrollUp;