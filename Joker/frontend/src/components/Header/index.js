import React from 'react'
import './Header.scss'
import Avartar from '../../Image/avatar.jpg'
import Logo from '../../Image/logo.jpg'
import { Link } from 'react-router-dom'
export default function Header() {
      return (
            <div className='Header'>
                  <div className='logo'>
                        <img src={Logo} alt='logo'/>
                  </div>
                  <div className='info-user'>
                        <div>
                              <Link 
                                    to='/postStory' 
                                    className='post-story'
                              >
                                    Post Story. 
                              </Link>
                        </div>
                        <div className='username'>
                              <p className='handicrefted'>Handicrefted by</p>
                              <p className='d-flex align-items-center justify-content-end'>
                                    <div className="dropdown">
                                          <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                          </button>
                                          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <li className='dropdown-item'>Logout</li>
                                          </ul>
                                    </div>
                                    Jim HLS
                              </p>
                        </div>
                        <div className='avatar'>
                              <img src={Avartar} alt='avatar'/>
                        </div>
                  </div>
            </div>
      )
}
