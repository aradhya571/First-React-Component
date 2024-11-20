import React from 'react';

const Main = () => {
  return (
    <main className="flex-grow p-8 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">About This App</h2>
        <p className="text-gray-700 mb-4">
          This is the main content area. Here we demonstrate a simple React application
          built with components. React makes it easy to create reusable UI components
          that present data that changes over time.
        </p>
        <p className="text-gray-700 mb-4">
          Each section of this page (Header, Main, and Footer) is a separate component,
          showcasing the component-based architecture that React is famous for.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-3">Key Features</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>Component-based architecture</li>
            <li>Responsive design</li>
            <li>Clean and modern styling with Tailwind CSS</li>
            <li>Semantic HTML structure</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Main;