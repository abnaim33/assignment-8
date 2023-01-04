import React from 'react'


const Contact = () => {
    return (
        <div>



            <section className="contact">

                <div className="image">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi04lDc0NKU5dikpHNr6cpZXDmqPBziHEl-w&usqp=CAU" alt="" />
                </div>

                <form action="">

                    <div className="inputBox">
                        <input type="text" placeholder="name" />
                        <input type="email" placeholder="email" />
                    </div>

                    <input type="text" placeholder="subject" className="box" />

                    <textarea placeholder="message" name="" id="" cols="30" rows="10"></textarea>

                    <input type="submit" className="btn" value="send" />

                </form>

            </section>




        </div>
    )
}

export default Contact