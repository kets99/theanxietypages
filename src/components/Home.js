import React from 'react';
import './Home.css';
import Box from './Box';
import emailjs from '@emailjs/browser';
import { useForm } from "react-hook-form";
import { useRef } from 'react';
import exam from './images/exam.png';
import sleepless from './images/sleepless.png';
import stones from './images/stones.png';
import { essays } from './Essays'; // Import the essays data
import { Link } from 'react-router-dom'; // Import Link from react-router-dom


const Home = () => {
	
	const form = useRef();

	 const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('service_gnr854j', 'template_6z90njf', form.current, 'VtxnRH0Rc3OpgIdzj')
		  .then((result) => {
			  console.log(result.text);
			  console.log("sent");
		  }, (error) => {
			  console.log(error.text);
		  });
	  };
	  
	const { handleSubmit, register, formState: { errors } } = useForm();
	const onSubmit = values => alert(values.email);

    return (
       	  <>
		  
		  
			    <div className="box-container">

      {essays.map((essay, index) => (
        <Link to={`/essay/${encodeURIComponent(essay.title)}`} key={index}>
          <Box title={essay.title} image={essay.image} />
        </Link>
      ))}
    </div>


<div className="section-divider" style={{ margin: '20px 0', borderTop: '1px solid #ccc' }}></div>


<div className="about-section" style={{ padding: '20px', maxWidth: '600px', margin: 'auto', textAlign: 'center', backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
  <h3 style={{ fontSize: '24px', marginBottom: '15px', color: '#333' }}>About Us</h3>
  <p style={{ lineHeight: '1.6', color: '#555' }}>
    An online space for anxious individuals to share their stories. 
    We believe there is great power in commiseration—just knowing that someone before you has gone through the same struggles and emerged stronger on the other side!
  </p>
  <p style={{ lineHeight: '1.6', color: '#555' }}>
    We're compiling stories and experiences of people's struggles with anxiety. For submissions or questions, please write to us at <a href="mailto:ophelia2999@gmail.com" style={{ color: '#007BFF', textDecoration: 'none' }}>ophelia2999@gmail.com</a>.
  </p>
</div>


<div className="section-divider" style={{ margin: '20px 0', borderBottom: '1px solid #ccc' }}></div>

				
		<div className="subscribe">
			<h3>subscribe to get new posts in your inbox</h3>
			<form ref={form} onSubmit={sendEmail}>
				  <div className="email">
				  <input type="email" id="mail" name="user_email" placeholder="email address here" {...register("email", {
						 required: "Required",
						 pattern: {
						   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
						   message: "invalid email address"
						 }
					   })} />
					 {errors.email && errors.email.message}
				</div>
			  <button class="button" type="submit">subscribe here!</button>
		
			</form>
		</div>

					
			  <footer>
                <p>© 2024 theanxietypages.com. All rights reserved.</p>
            </footer>
		
		</>
    );
};

export default Home;
