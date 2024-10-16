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
			  <button class="button" type="submit">send your message</button>
		
			</form>
		</div>
		
		</>
    );
};

export default Home;
