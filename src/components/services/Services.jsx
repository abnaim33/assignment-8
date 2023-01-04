import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Services = () => {

    const [course, setCourse] = useState([])

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => {
                setCourse(data);
                console.log(data)
            })
    }, [])

    return (
        <div>
            <section className="course">

                {course.length > 0 && course.map(item => (
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
        </div>
    )
}

export default Services