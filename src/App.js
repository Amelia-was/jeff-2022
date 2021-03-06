import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Research from './components/Research';
import Teaching from './components/Teaching';
import Vita from './components/Vita';

function App() {
  const navLinks = ['Research', 'Teaching', 'Vita'];
  const [currentPage, setCurrentPage] = useState(navLinks[0]);

  const renderPage = () => {
    switch (currentPage) {
      case 'Teaching':
        return <Teaching />;
      case 'Vita':
        return <Vita />;
      default:
        return <Research />;
    }
  }
  return (
    <div id='page' className='grid'>
      <Sidebar />
      <main className='flex column'>
        <nav className='mb-2'>
          <ul className='flex row'>
            {navLinks.map(link => <li key={link}><h3 className={`nav-link ${link == currentPage && 'nav-active'}`} onClick={() => setCurrentPage(link)}>{link}</h3></li>)}
          </ul>
        </nav>
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
