import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Product = () => {

    const animateFrom={oppacity:0,x:-2000};
    const animateTo={oppacity:1,x:0};
    
    return ( 
        <div name="Product" className="product">
            <h1>
                Product
            </h1>
            
                <motion.div className="painting A"
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{delay:1.05 , duration:1.5}}
                >
                    <img src={require('./pics/painting.png')} alt="painting" />
                    <h3>
                        Steel | Painting
                    </h3>
                    <p>
                        Baosteel from Fortune Global 500.
                        11 Process epoxy painting, ASTM
                        testing anti-baterial, paint thickness
                        0.12 mm, brightness 60°, paint can
                        resist 50kg impact.
                    </p>
                </motion.div>

                <motion.div className="plastic B"
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{delay:1.15 , duration:1.5}}
                >
                    <img src={require('./pics/plastic.png')} alt="plastic" />
                    
                    <h3>
                        Plastic
                    </h3>
                    <p>
                        Environmental plastic can be
                        sterilized in 100°C, tensile upto 30MPa
                        Virgin ABS material.
                    </p>
                    
                </motion.div>

                <motion.div className="bumper C"
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{delay:1.25, duration:1.5}}
                >
                    <img src={require('./pics/bumper.png')} alt="bumper" />
                    <h3>
                        Bumper Cover
                    </h3>
                    <p>
                        Reduce the impact of the collision,
                        safe and slinky
                    </p>
                </motion.div>

                <motion.div className="electric A"
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{delay:1.35, duration:1.5}}
                >
                    <img src={require('./pics/electric.png')} alt="electric" />
                    
                    <h3>
                        Electric System
                    </h3>
                    <p>
                        Linear motor, with UL/ROHS/EN
                        standard. Noise under 50 dB, with
                        lifetime 20,000 times movement.
                    </p>
                </motion.div>

                <motion.div className="design B"
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{delay:1.45, duration:1.5}}
                >
                    <img src={require('./pics/design.png')} alt="design" />
                    <h3>
                        Design
                    </h3>
                    <p>
                        Mordern design.Use new and strong
                        inserted ABS fire-proof panel avoid
                        off.
                        Easy to be cleaned and installed. Net
                        weight over 3.6kg.
                    </p>
                </motion.div>

                <motion.div className="platform C"
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{delay:1.55, duration:1.5}}
                >
                    <img src={require('./pics/platform.png')} alt="platform" />
                    
                    <h3>
                        Platform
                    </h3>
                    <p>
                        Stamping forming platform, smooth
                        surface no welding scar, bearing
                        200KG load. Option resin X-ray
                        translucent platform.
                    </p>
                    
                </motion.div>

                <motion.div className="siderail A"
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{delay:1.65, duration:1.5}}
                >
                    <img src={require('./pics/siderail.png')} alt="siderail" />
                    <h3>
                        Siderail
                    </h3>
                    <p>
                        Aluminum alloy side rail, 6-staff,
                        collapsed type with safe lock.
                    </p>
                </motion.div>

                <motion.div className="castors B"
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{delay:1.75, duration:1.5}}
                >
                    <img src={require('./pics/castors.png')} alt="castors" />
                    
                    <h3>
                        Castors
                    </h3>
                    <p>
                        5”covered casters.
                        TPR tire no worn out after running
                        30KM, save anti-winding hard shell,
                        united forming without bolts.
                        Pass Dynamic test: Bearing 120kg run
                        30KM and pass obstacles 500 time.
                    </p>
                    
                </motion.div>

                <motion.div className="hooks C"
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{delay:1.85, duration:1.5}}
                >
                    <img src={require('./pics/hooks.png')} alt="hooks" />
                    <h3>
                        Drainage Hooks
                    </h3>
                    <p>
                        Laser cutting drainage hook, both
                        sides
                    </p>
                </motion.div>

                <motion.div className="pole"
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{delay:1.95,duration:1.5}}
                >
                    <img src={require('./pics/pole.png')} alt="pole" />
                    
                    <h3>
                        IV pole
                    </h3>
                    <p>
                        Stainless Steel Column with plastic
                        hook.
                    </p>
                    
                </motion.div>

            </div>
        
     );
}
 
export default Product;