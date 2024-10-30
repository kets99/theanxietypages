import React from 'react';
import Box from './Box';
import exam from './images/exam.png';
import sleepless from './images/sleepless.png';
import stones from './images/stones.png';
import './Reading.css'
import { useParams } from 'react-router-dom';
import { essays } from './Essays'; // Your JSON data

const Reading = () => {
	 
	 const { title } = useParams(); // Get the title from the URL
  const essay = essays.find(essay => essay.title === decodeURIComponent(title)); // Find the essay by title
console.log(">>");
  if (!essay) {
    return <div>Essay not found.</div>; // Handle case when essay is not found
  }	
	
  return (
  
  <>

	  <div className="section-divider" style={{ margin: '20px 0', borderTop: '1px solid #ccc' }}></div>

    <div className="reading-container">
	<header>
      <h1>{essay.title}</h1>
	  <p className="date">Published on October 6, 2024</p>

      <img src={essay.image} alt={essay.title} />
	  </header>
	  
    <div className="essay-content">
    {essay.content.split('<!--p-->').map((paragraph, index) => (
        <p key={index} className="essay-paragraph">{paragraph}</p>
    ))}
</div>

       	  <div className="section-divider" style={{ margin: '20px 0', borderTop: '1px solid #ccc' }}></div>

		</div>

	     <footer>
                <p>© 2024 Your Website Name. All rights reserved.</p>
            </footer>
		</>
    );
};

export default Reading;
