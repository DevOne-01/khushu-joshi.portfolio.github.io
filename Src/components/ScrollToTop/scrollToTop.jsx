import React, { useEffect, useRef, useState } from 'react';
import './scrollToTop.scss';
import { IoIosArrowUp } from 'react-icons/io';
import clsx from 'clsx';
import { animateScroll as scroll } from 'react-scroll';

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);
    let prevScroll = useRef(0);
  
    const onScrollToTopClick = () => {
      scroll.scrollToTop();
    };
    useEffect(() => {
      let toggleVisibility = () => {
        let st = window.pageYOffset;
        if (st > 500 && st < prevScroll.current) {
          setVisible(true);
        } else {
          setVisible(false);
        }
  
        let tempScroll = st <= 0 ? 0 : st;
        prevScroll.current = tempScroll;
      };
  
      window.addEventListener("scroll", toggleVisibility);
  
      return () => {
        window.removeEventListener("scroll", toggleVisibility);
      };
    }, []);
  
    return (
      <button
        onClick={onScrollToTopClick}
        className={clsx("scroll-button", {
          "scroll-button--visible": visible,
        })}
      >
        <IoIosArrowUp />
      </button>
    );
  };
  
  export default ScrollToTop;