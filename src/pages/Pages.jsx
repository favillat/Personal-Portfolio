import React from "react";
import "./Pages.css";
import {Project_Card,Exp_Card, Contact_Card,Contact_Card} from "../components/projectCard/Cards";
import pongStillOne from "../assets/img/PONGStill.png";
import qrstill from "../assets/img/QRCStill.png";
import pskStill from "../assets/img/PISKLStill.png";
import gradPhoto from "../assets/img/gradPhoto.jpg";
import Projects from "./projects";
import { PostCSSPlugin } from "@rsbuild/core";

function Home(){
    return(
        
        <div className="HomePage">
           
            <div className="intro-Section">
                <div className="introHeader">
                    <h1>Fernando Villatoro</h1>
                    
                    <Contact_Card size={32} />
                    
                </div>
                <div className="subHeading" style={{ display: "flex", alignItems: "center", gap: "10px",marginTop: "2px" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pin-map" viewBox="0 0 16 16"style={{ verticalAlign: "middle" }} >
                        <path fill-rule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8z"/>
                        <path fill-rule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"/>
                    </svg>
                    <p>Phoenix, Arizona</p>
                </div>
                <br/>


                
                
                <p>Hello! I'm an 18-year-old Full-Stack Web Developer with over four years of hands-on programming experience. I'm proficient in Java, C++, and Python, and have worked extensively with a variety of powerful frameworks and tools to build dynamic, scalable applications.</p>
            </div>


            <div className="experience-Section">
                <br />
                <h1>Experience</h1>
                <br />


                <div className="vl">
                    <Exp_Card title = "Robotics Software Engineer" desc = "I played a key role in developing the software that powered my high school FTC robotics team's success.From designing control systems to integrating sensor data and refining autonomous routines, I helped build the brains behind the bot. It was an amazing experience that strengthened my skills in collaboration,problem-solving, and real-time systems development."date = "11.01.22 - 5.16.24" />
                    <Exp_Card title = "A Night at the Mosaleum" desc = "Right now, I’m collaborating with a couple of friends on a small video game project. It’s a passion project that’s been incredibly fun and rewarding, and it’s also helping me grow as a team player. I’m learning a lot about collaborative development, effective communication, and how to navigate creative and technical decision-making in a group setting." date = "02.11.25 - Current" />
                    <Exp_Card title = "Freelance Projects" desc = "I’ve taken on several freelance projects on platforms like Fiverr, which gave me valuable real-world experience working directly with clients. These opportunities taught me how to communicate effectively, manage deadlines, and adapt to diverse project requirements. It was a great way to sharpen both my technical skills and my ability to deliver results under pressure." date = "08.16.22 - 11.06.23" />
                    
                </div>
                
            </div>

            <br />

            <div className="project-Section">
                <br />
                <h1 >Projects</h1>
               
               <div>
                <Project_Card  link = "https://github.com/favillat/Pong"img = {pongStillOne} name = "Pong!" desc = "A small but complete remake of the legendary PONG game, built entirely in Python—because who needs fancy graphics when you can have pixel-perfect nostalgia" />
                <Project_Card link = "https://github.com/favillat/URL-to-QR" img = {qrstill} name = "URL Generator" desc = "A quick and easy tool that turns any link, text, or image into something any device can scan and read-—like a QR code." />
                <Project_Card link = "https://github.com/favillat/PISKEL" img = {pskStill} name = "PISKL" desc = "I’m a huge fan of the 8-bit art style, so I decided to build a bare-bones pixel art editor inspired by classic retro aesthetics. It’s a simple tool, but it’s been a fun way to combine my love for pixel art with hands-on programming." />
                <Project_Card link = "https://github.com/favillat/To-Do-List" img = {pskStill} name = "Tasks" desc = "A simple yet effective tool to curb my procrastination. A classic as far as projects go; but always a good start." />
               </div>

                
            
            </div>
            
        </div>
    );
}

function Contact(){
    return(
        <div className="ContactPage">

            <div className="ContactPageCards">
                <Contact_Card size={82} space={100}/>

            </div>
            <br />
            <div className="ContactText">
                <h3>Feel free to reach out! I'll usually get back to you within a day or two.</h3>
                <br />
                <h5>for business inquires email: villatorofernando0623@gmail.com</h5>

            </div>

        </div>
    )
}

export{Home,Contact};