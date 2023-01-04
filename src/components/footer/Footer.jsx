import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (

        <section className="footer">

            <div className="box-container">

                <div className="box">
                    <h3>Why us?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, maxime!</p>
                </div>



                <div className="box">
                    <h3>follow us</h3>
                    <Link to="/">facebook</Link>
                    <Link to="/">twitter</Link>
                    <Link to="/">instagram</Link>
                    <Link to="/">linkedin</Link>
                </div>

                <div className="box">
                    <h3>contact us</h3>
                    <p> <i className="fas fa-phone"></i> +880 1825583030 </p>
                    <p> <i className="fas fa-envelope"></i> skill.zone33@gmail.com </p>
                    <p> <i className="fas fa-map-marker-alt"></i> Dhaka-1312, Bangladesh </p>
                </div>

            </div>



        </section>

    )
}

export default Footer