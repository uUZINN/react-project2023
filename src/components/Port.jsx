import React from 'react'
import { portText } from '../constants'
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
import { useRef } from 'react';

const Port = () => {
  const horizontalRef = useRef(null);
  const sectionRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const horizontal = horizontalRef.current;
    const sections = sectionRef.current;

    let scrollTween = gsap.to(sections, {
      xPercent: -120 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: horizontal,
        start: "top 56px",
        end: () => "+=" + horizontal.offsetWidth,
        pin: true,
        scrub: 1,
        markers: false,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      }
    });

    return () => {
      scrollTween.kill();
    }
  }, []);

  return (
    <section id="port" ref={horizontalRef}>
      <div className="port__inner">
        <div className="port__title">
          Portfolio <em>포폴 작업물</em>
        </div>
        <div className="port__wrap">
          {portText.map((port, key) => (
            <div key={key} className={`port__item p${key + 1}`} ref={(el) => (sectionRef.current[key] = el)}>
              <span className="num">{port.num}</span>
              <a href="/">
                <img src={port.img} alt="" />
              </a>
              <h3 className="title">{port.title}</h3>
              <p className="desc">{port.desc}</p>
              <p className="name">{port.name}</p>
              <div className='port__btn__wrap'>
                <a className="port__btn" href={port.view}>view</a>
                <a className="port__btn" href={port.code}>code</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Port