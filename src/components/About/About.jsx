import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
    return (
        <div className="about">
            <div className="about-left">
                <img src={about_img} alt=""  className='about-img'/>
                <img src={play_icon} alt="" className='play-icon'/>
            </div>
            <div className="about-right">
                <h3>ABOUT UNIVERSITY</h3>
                <h2>Nutturing Tomorrow's Leaders Today</h2>
                <p>Embark on the transformative journey with our institute's comrehensive education program</p>
                <p>Lorem ipsum dolor siting elit. Sapiente, earum possimus magnam quod est laudantium omnis, sequi quo unde fugiat reiciendis nihil quia mollitia? Incidunt exercitationem totam dolores molestiae eum, distinctio sapiente autem reprehenderit veniam? Voluptatibus, perspiciatis ut expedita perferendis provident iste dolorum officia ipsam nulla eos deleniti obcaecati iure eligendi molestiae, consectetur </p>
            </div>
        </div>
    )
}

export default About