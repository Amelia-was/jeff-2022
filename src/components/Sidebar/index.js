import React, { useState } from 'react';
import { IoMail, IoSchool } from "react-icons/io5";

function Sidebar() {
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    return (
        <header className='flex row align-c-between'>
            <div className='flex row justify-end-lg justify-start-md justify-center-sm'>
            <img className='hide-mobile headshot' src={require('../../assets/imgs/jeff-headshot.jpg')} alt='headshot of Jeff Hicks' />
            <h1 className='mt-2'>Jeffrey Hicks</h1>
            <div className='flex row align-baseline justify-center-sm w-100 mt-2'>

                <h3 className='mobile-nav show-mobile mr-2' onClick={() => setIsMobileOpen(!isMobileOpen)}>{isMobileOpen ? '▾' : '▸'} About</h3>

                <a href='mailto:jeffrey.hicks@utoronto.ca' className='icon-link show-mobile mr-2'>
                    <h3 className='ml-1'>Email</h3>
                </a>
                <a href='https://scholar.google.com/citations?user=Msyi62IAAAAJ&hl=en' className='icon-link show-mobile' target='_blank' rel='noreferrer'>
                        <h3 className='ml-1'>Google Scholar</h3>
                </a>
            </div>
            <p className={`about mt-1 ${!isMobileOpen && 'hide-mobile'}`}>
                Hello! I am an SSHRC Postdoctoral Fellow at the University of Toronto from 2021-2023. My research agenda primarily focuses on the design and implementation of taxation and social insurance systems. My current projects use a range of data sources including large-scale linked administrative datasets, web-scraped textual data, and spatial information.
            </p>

            </div>
            <ul className='contact flex row align-baseline'>
                <li className='hide-mobile mt-2'>
                    <a href='mailto:jeffrey.hicks@utoronto.ca' className='icon-link'>
                        <IoMail className='contact-icon' />
                    </a></li>
                <li className='hide-mobile'>
                    <a href='https://scholar.google.com/citations?user=Msyi62IAAAAJ&hl=en' className='icon-link mr-2' target='_blank' rel='noreferrer'>
                        <IoSchool className='contact-icon' />
                    </a>
                </li>
            </ul>
        </header>
    );
};

export default Sidebar;