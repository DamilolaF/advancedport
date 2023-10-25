import React from 'react'
import './nav.css'
import {BiHomeAlt2} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import {BsBook} from 'react-icons/bs'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageDetail} from 'react-icons/bi'

const Nav= () => {
  return (
    <nav>
      <a href="#" className='active'><BiHomeAlt2 /></a>
      <a href="#about"><AiOutlineUser /></a>
      <a href="#experience"><BsBook /></a>
      <a href="#services"><RiServiceLine /></a>
      <a href="#contact"><BiMessageDetail /></a>
    </nav>
  )
}

export default Nav


