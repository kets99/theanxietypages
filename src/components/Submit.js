import React, { useState } from 'react';
import './Submit.css';

const Submit = () => {
	const [title, setTitle] = useState('');
  const [essay, setEssay] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to an API or log it
    console.log({ title, essay });
    
    // Clear the form
    setTitle('');
    setEssay('');
  };


    return (
	      <div>
			<>
         <div className="label2">   <h1>submit to us</h1> </div>
            <form onSubmit={handleSubmit}>
			<div>
        <label htmlFor="title">	</label>
        <input
          type="text"
          id="title"
		  placeholder="title for your piece"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
	  		<div>
        <label htmlFor="name">		</label>
        <input
          type="text"
          id="title"
		  placeholder="name as you want it to appear"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="essay"></label>
        <textarea
          id="essay"
		  placeholder="your piece here..."
          value={essay}
          onChange={(e) => setEssay(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>	
	</>
	</div>
    );
};

export default Submit;
