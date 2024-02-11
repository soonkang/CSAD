import React from 'react'
import './Service.css'

function Service (){
    let message1 = 'The team behind Wild West Eats';
    let message2 = 'Project Explanation'
    return (
        <section className='section-white'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 text-color'>
                        <h2 className='section-title'>
                            About Us
                        </h2>
                        <p className='section-subtitle'>{message2}</p>
                    </div>
                    <div className='team-info'>
                    <p>"Our restaurant is dedicated to enhancing customer convenience and streamlining operations by offering our food and drinks menu online for easy ordering. Our website is accessible from any web browser, allowing customers to place orders using their own devices or tablets like iPads.</p>
                    <p>We also feature seasonal promotions and support multiple payment methods, including cash, credit cards, and online payment options such as PayPal. To ensure efficient management of customer data, we utilize Firebase for storage.</p>
                    <p>Built with React.js and backed by Node.js, our website offers a seamless user experience. In addition to showcasing our team members, we provide notification features, user authentication, and a feedback system to continuously improve our services."</p>
                    </div>
                    <div className='col-md-12 text-color'>
                        <h2 className='section-title'>
                            Team Members
                        </h2>
                        <p className='section-subtitle'>{message1}</p>
                    </div>
                    <div className='col-sm-6 col-md-4'>
                        <div className='team-item'>
                            <img src='sk.jpg' className='team-img' alt='invalid'></img>
                            <h3>Soon Kang</h3>
                            <div className='team-info'>
                                <p>Group Leader</p>
                                <p>I'm entrusted with the vital role of shepherding our group project, ensuring it not only meets all requirements and stays on schedule, but also fostering an environment where each team member submits their individual parts promptly. Moreover, I take great care to ensure our client-server application not only serves its intended purposes effectively but also boasts a visually appealing and intuitive GUI. Furthermore, I'm dedicated to infusing our project with innovation and creativity by synthesizing and integrating our collective code into something truly unique.</p>
                            </div>
                        </div>
                        <div className='team-item'>
                            <img src='nigel.png' className='team-img' alt='invalid'></img>
                            <h3>Nigel Wong</h3>
                            <div className='team-info'>
                                <p>Vice Leader</p>
                                <p>I'm entrusted with the vital role of shepherding our group project, ensuring it not only meets all requirements and stays on schedule, but also fostering an environment where each team member submits their individual parts promptly. Moreover, I take great care to ensure our client-server application not only serves its intended purposes effectively but also boasts a visually appealing and intuitive GUI. Furthermore, I'm dedicated to infusing our project with innovation and creativity by synthesizing and integrating our collective code into something truly unique.</p>
                            </div>
                        </div>
                        <div className='team-item'>
                            <img src='yp.png' className='team-img' alt='invalid'></img>
                            <h3>Yong Pang</h3>
                            <div className='team-info'>
                                <p>Group Member</p>
                                <p>I'm entrusted with the vital role of shepherding our group project, ensuring it not only meets all requirements and stays on schedule, but also fostering an environment where each team member submits their individual parts promptly. Moreover, I take great care to ensure our client-server application not only serves its intended purposes effectively but also boasts a visually appealing and intuitive GUI. Furthermore, I'm dedicated to infusing our project with innovation and creativity by synthesizing and integrating our collective code into something truly unique.</p>
                            </div>
                        </div>
                        <div className='team-item'>
                            <img src='harold.jpg' className='team-img' alt='invalid'></img>
                            <h3>Harold Harry</h3>
                            <div className='team-info'>
                                <p>Group Member</p>
                                <p>I'm entrusted with the vital role of shepherding our group project, ensuring it not only meets all requirements and stays on schedule, but also fostering an environment where each team member submits their individual parts promptly. Moreover, I take great care to ensure our client-server application not only serves its intended purposes effectively but also boasts a visually appealing and intuitive GUI. Furthermore, I'm dedicated to infusing our project with innovation and creativity by synthesizing and integrating our collective code into something truly unique.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Service
