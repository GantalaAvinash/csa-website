import React from 'react';
import { Kali,
  Metasploit,
  Wireshark,
  Nmap,
  Parrot } from './imports';
import './brand.css';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img src={Kali} />
    </div>
    <div>
      <img src={Metasploit} />
    </div>
    <div>
      <img src={Wireshark} />
    </div>
    <div>
      <img src={Nmap} />
    </div>
    <div>
      <img src={Parrot} />
    </div>
  </div>
);

export default Brand;
