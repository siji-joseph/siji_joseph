import React from 'react';

import styles from './Contact.module.css';
import { getImageUrl } from '../../utils';

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl('contact/emailIcon.png')} alt="Email icon" />
          <a href="mailto:sijijoseph95@gmail.com">sijijoseph95@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl('contact/linkedinIcon.png')}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/siji-joseph-3225a2101/">
            linkedin.com/siji-joseph
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl('contact/githubIcon.png')} alt="Github icon" />
          <a href="https://github.com/siji-joseph">github.com/siji-joseph</a>
        </li>
      </ul>
    </footer>
  );
};
