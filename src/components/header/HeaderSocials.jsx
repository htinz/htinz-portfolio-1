import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {RiInstagramFill} from 'react-icons/ri'
import {IoLogoYoutube} from 'react-icons/io'
import {BsLinkedin} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

export default function HeaderSocials() {
  return (
    <div className="header__socials">
      <a href="https://www.facebook.com/htin.zaw.12" target="_blank"><BsFacebook/></a>
      <a href="https://www.instagram.com/htinzaw_hz/" target="_blank"><RiInstagramFill/></a>
      <a href="https://www.youtube.com/channel/UCzKa8IJzkV_dJhKNEj7lMxw" target="_blank"><IoLogoYoutube/></a>
      <a href="https://www.linkedin.com/in/htin-zaw-7a21721a/" target="_blank"><BsLinkedin/></a>
      <a href="https://twitter.com/Hzaw" target="_blank"><BsTwitter/></a>
      <a href="https://github.com/htingithub/portfolio" target="_blank"><BsGithub/></a>
      </div>
  )
}
