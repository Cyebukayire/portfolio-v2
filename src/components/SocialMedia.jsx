import React from 'react';
import { BsTwitter, BsGithub, BsLinkedin, BsYoutube } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <BsTwitter />
    </div>
    <div>
      <BsLinkedin />
    </div>
    <div>
      <BsGithub />
    </div>
    <div>
      <BsYoutube />
    </div>
  </div>
);
export default SocialMedia;