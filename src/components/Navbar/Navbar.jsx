import React, {useEffect,useState} from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
    const [sticky,setSticky] = useState(false);
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            window.scrollY > 1 ? setSticky(true) :setSticky(false);
        })

    },[])
    return (
        <nav className={`container ${sticky ?'dark-nav':''}`}> 
            <img src={logo} alt="" className='logo'/>
            <ul>
                <li>Witty</li>
                <li>Notes</li>
                <li>Doubts</li>
                <li>Test</li>
                <li><button className='btn'>Connect</button></li>
            </ul>
        </nav>
    )
}

export default Navbar