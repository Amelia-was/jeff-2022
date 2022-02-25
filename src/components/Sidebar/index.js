import React from 'react';
import { IoMail, IoLogoLinkedin, IoSchool } from "react-icons/io5";

function Sidebar() {
    return (
        <header className='flex column'>
            <img className='headshot' src={require('../../assets/imgs/jeff-headshot.jpg')} alt='headshot of Jeff Hicks' />
            <h1 className='mt-2'>Jeffrey Hicks</h1>
            <h2 className='mt-2'>University of Toronto</h2>
            <p className='about mt-2'>
                Hello! I am an SSHRC Postdoctoral Fellow at the University of Toronto from 2021-2023. My research agenda primarily focuses on the design and implementation of taxation and social insurance systems. My current projects use a range of data sources including large-scale linked administrative datasets, web-scraped textual data, and spatial information.
            </p>
            <ul className='contact flex row mt-2'>
                <li>
                    <a href='mailto:jeffrey.hicks@utoronto.ca' className='icon-link'>
                        <IoMail className='contact-icon' />
                    </a></li>
                <li>
                    <a href='https://scholar.google.com/citations?user=Msyi62IAAAAJ&hl=en' className='icon-link' target='_blank' rel='noreferrer'>
                        <IoSchool className='contact-icon' />
                    </a>
                </li>
            </ul>
        </header>
    );
};

export default Sidebar;