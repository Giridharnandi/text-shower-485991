import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">About text shower</h1>
        <p className="text-lg mb-8">Create a small UI component with the following functionality:

An input box with a placeholder saying "Enter the text"

A button labeled "Show"

When the user types something in the input box and clicks the "Show" button, the entered text should be displayed above the input as an <h2> heading</p>
        
        <div className="prose dark:prose-invert max-w-none">
          <h2>Our Mission</h2>
          <p>
            At text shower, we're committed to providing the best possible experience for our users.
            Our mission is to create innovative solutions that make a real difference in people's lives.
          </p>
          
          <h2>Our Team</h2>
          <p>
            We're a dedicated team of professionals with expertise in design, development, and user experience.
            Together, we work tirelessly to bring you the best products and services.
          </p>
          
          <h2>Our Values</h2>
          <ul>
            <li>User-focused design</li>
            <li>Innovation and creativity</li>
            <li>Quality and excellence</li>
            <li>Integrity and transparency</li>
            <li>Continuous improvement</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;