import { Link } from 'react-scroll';
import { useState } from 'react';
import {CgMenu , CgClose} from 'react-icons/cg';
import { motion } from 'framer-motion';


const NaveBar = () => {

    const animateFrom = {opacity:0 , y:-40};
    const animateTo = {opacity:1 , y:0};

    const [open,setOpen]=useState(false);

    const hambergerIcon=<CgMenu className='hambmenu' size='40px'
                            onClick={()=>setOpen(!open)}/>;
    
    const closeIcon =<CgClose className='hambmenu' size='35px'
                        onClick={()=>setOpen(!open)}/>;
    return ( 
        <div className="Nave">
                <nav>
                    <Link to='Home' spy={true} smooth={true} offset={-5000} duration={500} className="HomeNav p">
                        <img src={require('./pics/logocom.png')} alt="LOGO" className='logo' />
                        <img src={require('./pics/logophone.png')} alt="LOGOPHONE" className='logophone' />
                    </Link>
                    <div className="navigation">
                        <ul>
                            <li>
                            <Link to='Home' spy={true} smooth={true} offset={-5000} duration={500} className="HomeNav p">Home</Link>
                            </li>
                            <li>
                            <Link to='Product' spy={true} smooth={true} offset={-100} duration={500} className="products p">Product</Link>
                            </li>
                            <li>
                            <Link to='About' spy={true} smooth={true} offset={-100} duration={500} className="about p">About</Link>
                            </li>
                            <li>
                            <Link to='Contact' spy={true} smooth={true} offset={-100} duration={500} className="contact p">Contact us</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

            <div className="hamb"> 

                
            {open ? closeIcon : hambergerIcon }
            {open && <ul className='ulham'>
                    <motion.li 
                       initial={animateFrom}
                       animate={animateTo}
                       transition={{delay:0.05}}
                    >
                        <Link to='Home' spy={true} smooth={true} offset={-5000} duration={500} className="HomeNav">Home</Link>
                    </motion.li>
                    <motion.li 
                       initial={animateFrom}
                       animate={animateTo}
                       transition={{delay:0.10}}
                    >
                        <Link to='Product' spy={true} smooth={true} offset={-100} duration={500} className="products">Product</Link>
                    </motion.li>
                    <motion.li 
                       initial={animateFrom}
                       animate={animateTo}
                       transition={{delay:0.20}}
                    >
                        <Link to='About' spy={true} smooth={true} offset={-100} duration={500} className="about">About</Link>
                    </motion.li>
                    <motion.li 
                       initial={animateFrom}
                       animate={animateTo}
                       transition={{delay:0.30}}
                    >
                        <Link to='Contact' spy={true} smooth={true} offset={-100} duration={500} className="contact">Contact us</Link>
                    </motion.li>
                </ul>}
            </div> 
    </div>
    );
}
 
export default NaveBar;