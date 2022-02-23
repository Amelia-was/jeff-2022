import React from 'react';

function Sidebar() {
    return (
        <header>
            <img src={require('../../assets/imgs/jeff-headshot.jpeg')} alt='headshot of Jeff Hicks' />
            <h1>Jeffrey Hicks</h1>
            <h2>University of Toronto</h2>
            <p>Hello! I am a SSHRC Postdoctoral Fellow at the University of Toronto from 2021-2023. My current research spans a range of public economics topics including business taxation, unemployment insurance, low-income supports, and income inequality. I focus on research that can help improve the design and implementation of taxation and social insurance systems to further both fairness and efficiency objectives. My current projects use a range of data sources including large-scale linked administrative datasets, web-scraped textual data, and spatial information.</p>
            <ul>
                <li>email</li>
                <li>linkedin</li>
                <li>uoft website</li>
            </ul>
        </header>
    );
};

export default Sidebar;