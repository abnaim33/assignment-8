import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
    const [course, setCourse] = useState([])

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => {
                setCourse(data);
                console.log(data)
            })
    }, [])

    const slicedCourse = course.slice(0, 4);

    return (
        <div>



            <section className="home">

                <div className="content">
                    <h3>Digital Skills which are very Valuable</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia repellat aperiam libero, beatae debitis iusto quia sit aliquid placeat facilis?</p>
                    <Link to="/services" className='btn'>Get Start</Link>
                </div>

                <div className="image">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi04lDc0NKU5dikpHNr6cpZXDmqPBziHEl-w&usqp=CAU" alt="home svg" />
                </div>

            </section>

            <section className="course">

                {slicedCourse.length > 0 && slicedCourse.map(item => (
                    <div className="box" key={item.name}>
                        <span className="amount">{item.price}</span>
                        <img src={item.image} alt="" />
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>
                        <h3>{item.name}</h3>
                        <p>{item.details}
                        </p>
                        <Link to="/services">learn more</Link>
                        <div className="icons">
                            <p> <i className="far fa-clock"></i> {item.hour} Hours</p>
                            <p> <i className="far fa-calendar"></i>{item.duration} Months</p>
                            <p> <i className="fas fa-book"></i> {item.module} Modules</p>
                        </div>
                    </div>
                ))}




            </section>

            {/* <Footer /> */}

        </div>
    )
}

export default Home