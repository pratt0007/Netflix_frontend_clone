import {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import "./Nav.css"
const Nav = () => {


    const history = useNavigate();

    const [show,handleShow]  = useState(false);

    const transitionNavBar = () => {
        if(window.scrollY > 100){
              handleShow(true);
        }
        else{
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll",transitionNavBar)
        return () => window.removeEventListener("scroll",transitionNavBar)
    }, []);

  return (

    <div className={`nav ${show && 'nav_black'}`}>

    <div className='nav_contents'>
    <img  className='nav_logo' src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' alt='' />
    
    
    
    <img onClick={() =>history('/profile')} className='nav_avatar' src='https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg' alt='' />


    </div>
    </div>
  )
}

export default Nav