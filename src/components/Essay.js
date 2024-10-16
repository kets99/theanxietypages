import React from 'react';
import { useParams } from 'react-router-dom';
import { essays } from './Essays'; // Adjust the import based on your structure


const Essay = ({ title, content }) => {
    return (
        <div style={{ padding: '20px', lineHeight: '1.6' }}>
            <h1>{title}</h1>
            {content.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph.trim()}</p>
            ))}
        </div>
    );
};

export default Essay;
