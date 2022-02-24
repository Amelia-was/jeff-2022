import React from 'react';
import { IoMail, IoLogoLinkedin, IoSchool } from "react-icons/io5";

function Sidebar() {
    return (
        <header className='flex column'>
            <img className='headshot' src={require('../../assets/imgs/jeff-headshot-1.jpg')} alt='headshot of Jeff Hicks' />
            <h1 className='mt-2'>Jeffrey Hicks</h1>
            <h2 className='mt-2'>University of Toronto</h2>
            <p className='about mt-2'>Hello! I am a SSHRC Postdoctoral Fellow at the University of Toronto from 2021-2023. My current research spans a range of public economics topics including business taxation, unemployment insurance, low-income supports, and income inequality. I focus on research that can help improve the design and implementation of taxation and social insurance systems to further both fairness and efficiency objectives. My current projects use a range of data sources including large-scale linked administrative datasets, web-scraped textual data, and spatial information.</p>
            <ul className='contact flex row mt-2'>
                <li><IoMail className='contact-icon' /></li>
                <li><IoLogoLinkedin className='contact-icon' /></li>
                <li><IoSchool className='contact-icon' /></li>
            </ul>
        </header>
    );
};

export default Sidebar;