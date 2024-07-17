import React from 'react';
import vg from "../assets/2.webp";
import {
    AiFillGoogleCircle, 
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
        <div className="home" id="home">
            <main>
                <h1>TechnoPulse.</h1>
                <p>Solution to all your Tech problems</p>
            </main>
        </div>

        <div className="home2">
            <img src={vg} alt="Graphic" />
            <div>
                <p>
                    We are your one and only solution to the tech problems you face everyday.
                    We are the leaing tech company whose aim is to increase the problem solving ability in children.
                </p>
            </div>
        </div>

        <div className="home3" id="about">
            <div>
                <h1>Who are we?</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, eos, aperiam perspiciatis ipsum 
                    illum enim sint similique tempora expedita consequatur esse fugit itaque assumenda aspernatur adipisci laborum. 
                    Architecto libero, vel harum ipsam nostrum exercitationem officiis, 
                    voluptatibus amet eos quod doloribus possimus sit sequi recusandae ab error. Cumque maxime at ducimus!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus perferendis et, hic fuga libero 
                    quia id rem eius dolores dolor! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat velit tenetur 
                    accusantium perspiciatis assumenda sit quasi repellendus ut exercitationem tempora.
                </p>
            </div>
        </div>

        <div className="home4" id="brands">
            <div>
                <h1>Brands</h1>
                <article>
                    <div
                        style={{
                            animationDelay: "0.3s"
                        }}
                    >
                        <AiFillGoogleCircle />
                        <p>Google</p>
                    </div>

                    <div
                        style={{
                            animationDelay: "0.5s"
                        }}
                    >
                        <AiFillAmazonCircle />
                        <p>Amazon</p>
                    </div>
                      
                    <div
                        style={{
                            animationDelay: "0.7s"
                        }}
                    >
                        <AiFillYoutube />
                        <p>Youtube</p>
                    </div>

                    <div
                        style={{
                            animationDelay: "0.9s"
                        }}
                    >
                        <AiFillInstagram />
                        <p>Instagram</p>
                    </div>

                </article>
            </div>
        </div>
    </>
  )
}

export default Home;