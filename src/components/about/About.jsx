import React from 'react'


const students = [
    {
        "name": "John Deo",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR9fySYP94mwjm55Ou8YIMnSUHMiHUN8gIuQ&usqp=CAU",
        "details": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A molestiae ipsa mollitia. Dolore sapiente animi ab eligendi voluptatum ipsa omnis."
    },
    {
        "name": "John Deo",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR9fySYP94mwjm55Ou8YIMnSUHMiHUN8gIuQ&usqp=CAU",
        "details": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A molestiae ipsa mollitia. Dolore sapiente animi ab eligendi voluptatum ipsa omnis."
    },
    {
        "name": "John Deo",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR9fySYP94mwjm55Ou8YIMnSUHMiHUN8gIuQ&usqp=CAU",
        "details": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A molestiae ipsa mollitia. Dolore sapiente animi ab eligendi voluptatum ipsa omnis."
    },
    {
        "name": "John Deo",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR9fySYP94mwjm55Ou8YIMnSUHMiHUN8gIuQ&usqp=CAU",
        "details": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A molestiae ipsa mollitia. Dolore sapiente animi ab eligendi voluptatum ipsa omnis."
    },
    {
        "name": "John Deo",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR9fySYP94mwjm55Ou8YIMnSUHMiHUN8gIuQ&usqp=CAU",
        "details": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A molestiae ipsa mollitia. Dolore sapiente animi ab eligendi voluptatum ipsa omnis."
    },
    {
        "name": "John Deo",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR9fySYP94mwjm55Ou8YIMnSUHMiHUN8gIuQ&usqp=CAU",
        "details": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A molestiae ipsa mollitia. Dolore sapiente animi ab eligendi voluptatum ipsa omnis."
    },
]

const About = () => {
    return (
        <div>
            <h1 className="heading"> student's review </h1>



            <section className="review">


                {students.map((student, i) => (
                    <div className="box" key={i}>
                        <div className="student">
                            <div className="student-info">
                                <img src={student.image} alt="" />
                                <div className="info">
                                    <h3>{student.name}</h3>
                                    <span>student</span>
                                </div>
                            </div>
                            <i className="fas fa-quote-right"></i>
                        </div>
                        <p className="text">{student.details}</p>
                    </div>
                ))}





            </section>
        </div>
    )
}

export default About