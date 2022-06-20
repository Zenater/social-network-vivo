import React from 'react';
import s from './../SocialLink/SocialLink.module.css';

const SocialLink = () => {
  return (
    <div className={s.wrapper}>
      <ul className={s.list}>
        <li className={s.item}>
          <a className={s.link}>
            <img className={s.img} src='https://iqonic.design/themes/socialv/html/images/icon/08.png'/>
          </a>
        </li>
        <li className={s.item}>
          <a className={s.link}>
            <img className={s.img} src='https://iqonic.design/themes/socialv/html/images/icon/10.png'/>
          </a>
        </li>
        <li className={s.item}>
          <a className={s.link}>
            <img className={s.img} src='https://iqonic.design/themes/socialv/html/images/icon/13.png'/>
          </a>
        </li>
        <li className={s.item}>
          <a className={s.link}>
            <img className={s.img} src='https://iqonic.design/themes/socialv/html/images/icon/12.png'/>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SocialLink;