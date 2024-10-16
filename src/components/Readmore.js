import React from 'react';
import Box from './Box';
import exam from './images/exam.png';
import sleepless from './images/sleepless.png';
import stones from './images/stones.png';
import { essays } from './Essays'; // Import the essays data
import { Link } from 'react-router-dom'; // Import Link from react-router-dom



const Readmore = () => {
    return (
         <>
	  	    <div className="box-container">
      {essays.map((essay, index) => (
        <Link to={`/essay/${encodeURIComponent(essay.title)}`} key={index}>
          <Box title={essay.title} image={essay.image} />
        </Link>
      ))}
    </div>
		
	 <button class="button" type="submit" >read more</button>
		
		
		</>
    );
};

export default Readmore;
