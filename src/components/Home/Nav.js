import {useEffect, useState} from 'react'
import './css/Nav.css'
import netflix from './img/netflix.png'
const Nav = (props) => {
    const [show, handleShow] = useState()

    const transitionNavBar = () => {
        if(window.scrollY > 100){
            handleShow(true)
        }else{
            handleShow(false)
        }
    }

    useEffect(()=>{
       window.addEventListener("scroll", transitionNavBar)
       return () => {
           window.removeEventListener("scroll", transitionNavBar)
       }
    },[])

  

    return (
        <nav className={`nav ${show && "nav__black"}`}>
            <div className="nav__contents">
                <img className="nav__logo" src={netflix} alt=""></img>
                <img className="nav__avatar" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png" alt=""></img>
            </div>
        </nav>
    )
}

export default Nav