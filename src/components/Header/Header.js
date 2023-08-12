import React from 'react'
import './Header.css'
import logo from '../../assets/logo.png'
import search from '../../assets/search.png'

const Header = () => {
    return (
        <div className='header-container'>
            <div className="header-left">
                <ul>
                    <li><img src={logo} alt="" /></li>
                    <li>
                        <select name="Courses" id="">
                            <option value="frontend" select >Course</option>
                            <option value="frontend" >Frontend course</option>
                            <option value="Backend" >Backend course</option>
                        </select>
                    </li>
                    <li>
                        <select name="programs" id="">
                            <option value="frontend" select >Programs</option>
                            <option value="frontend" >Frontend program</option>
                            <option value="Backend" >Backend program</option>
                        </select>
                    </li>
                </ul>
            </div>
            <div className="header-right">
                <ul>
                    <li><img src={search} alt="" /></li>
                    <li>Log in</li>
                    <li>
                        <button>
                            JOIN NOW
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header
