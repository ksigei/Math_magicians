import React from 'react';
import './css/Home.css';

function Home() {
  return (
    <div className="container">
      <div className="description">
        <h3>What is math magicians?</h3>
        <p>
          &quot;Math magicians&quot; is a website for all fans of mathematics.
          It is a Single Page App (SPA) that allows users to:
        </p>
        <ul>
          <li> Make simple calculations.</li>
          <li>Read a random math-related quote.</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
