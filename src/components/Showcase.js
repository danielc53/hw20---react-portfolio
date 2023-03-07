import React from 'react';
import './Showcase.css'
import { FaGithub } from 'react-icons/fa';


const Showcase = () => {
    return (
        <div>
            <div className='showcaseHeader'>Projects</div>
            <div className='showcaseContainer'>

                <div className='contentBox hoverFocusEl' id='box1'>
                    <p className='hoverFocusName'>Sports Players</p>
                    <a href='https://github.com/danielc53/project1-sport-players' className='hoverFocus'>
                        <FaGithub className='iconShowcase FaGithubShowcase' />
                    </a>
                    {/* <a href='https://www.linkedin.com/in/daniel-christy-15871322a/' className='hoverFocus'>
                        <FaLinkedin className='iconShowcase FaLinkedinShowcase' />   
                    </a> */}
                </div>

                <div className='contentBox hoverFocusEl' id='box2'>
                    <p className='hoverFocusName'>Gamers Den</p>
                    <a href='https://github.com/danielc53/project-2' className='hoverFocus'>
                        <FaGithub className='iconShowcase FaGithubShowcase' />
                    </a>
                    {/* <a href='https://www.linkedin.com/in/daniel-christy-15871322a/' className='hoverFocus'>
                        <FaLinkedin className='iconShowcase FaLinkedinShowcase' />   
                    </a> */}
                </div>
                <a href='https://chatter-box-500.herokuapp.com/' className='contentBox hoverFocusEl'>
                    <div  id='box3' >
                    <p className='hoverFocusName'>ChatterBox</p>
                    <a href='https://github.com/danielc53' className='hoverFocus'>
                        <FaGithub className='iconShowcase FaGithubShowcase' />
                    </a>
                    {/* <a href='https://www.linkedin.com/in/daniel-christy-15871322a/' className='hoverFocus'>
                        <FaLinkedin className='iconShowcase FaLinkedinShowcase' />   
                    </a> */}
                </div>
                </a>
                

                <div className='contentBox hoverFocusEl' id='box4'>
                    <p className='hoverFocusName'>Project 4</p>
                    <a href='https://github.com/danielc53' className='hoverFocus'>
                        <FaGithub className='iconShowcase FaGithubShowcase' />
                    </a>
                    {/* <a href='https://www.linkedin.com/in/daniel-christy-15871322a/' className='hoverFocus'>
                        <FaLinkedin className='iconShowcase FaLinkedinShowcase' />   
                    </a> */}
                </div>
            </div>
        </div>
    )
}

export default Showcase;



