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
	
 const { handleSubmit, register, formState: { errors } } = useForm();

    const sendEmail = (data) => {
        emailjs.send('service_gnr854j', 'template_6z90njf', {
            user_email: data.user_email, // This must match the template placeholder
        }, 'VtxnRH0Rc3OpgIdzj')
        .then((result) => {
            console.log("Email sent successfully!", result.text);
        }, (error) => {
            console.log("Error sending email: ", error.text);
        });
    };

    return (
       	  <>
		  
		  <div className="section-divider" style={{ margin: '20px 0', borderTop: '1px solid #ccc' }}></div>

			    <div className="box-container">

      {essays.map((essay, index) => (
        <Link to={`/essay/${encodeURIComponent(essay.title)}`} key={index}>
          <Box title={essay.title} image={essay.image} />
        </Link>
      ))}
    </div>


<div className="section-divider" style={{ margin: '20px 0', borderTop: '1px solid #ccc' }}></div>


<div className="about-section" style={{ padding: '10px', maxWidth: '600px', margin: 'auto', textAlign: 'center', backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
  <h3 style={{ fontSize: '24px', marginBottom: '15px', color: '#333' }}>about us</h3>
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
                <h3>Subscribe to get new posts in your inbox</h3>
                <form onSubmit={handleSubmit(sendEmail)}>
                    <div className="email">
                        <input
                            type="email"
                            id="mail"
                            name="user_email" // This should match the email template variable
                            placeholder="Email address here"
                            {...register("user_email", {
                                required: "Required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email address"
                                }
                            })}
                        />
                        {errors.user_email && <span>{errors.user_email.message}</span>}
                    </div>
                    <button className="button" type="submit">Send your message</button>
                </form>
            </div>
					
			  <footer>
                <p>© 2024 theanxietypages.com. All rights reserved.</p>
            </footer>
		
		</>
    );
};

export default Home;
