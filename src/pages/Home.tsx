import React from 'react';

export const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-primary">text shower</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">Create a small UI component with the following functionality:

An input box with a placeholder saying "Enter the text"

A button labeled "Show"

When the user types something in the input box and clicks the "Show" button, the entered text should be displayed above the input as an <h2> heading</p>
          <div className="flex gap-4 justify-center">
            <button className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-md font-medium">
              Get Started
            </button>
            <button className="border border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-md font-medium">
              Learn More
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-card p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">Feature One</h2>
            <p className="text-gray-600 dark:text-gray-300">A key feature of our application that provides significant value to users.</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">Feature Two</h2>
            <p className="text-gray-600 dark:text-gray-300">Another important capability that makes our application stand out.</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">Feature Three</h2>
            <p className="text-gray-600 dark:text-gray-300">A third key benefit that users will enjoy when using our application.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;