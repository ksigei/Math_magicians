import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Calculator from './components/Routes/Calculator';
import Home from './components/Routes/Home';
import About from './components/Routes/About';
import Quotes from './components/Routes/Quotes';
import './Styles.css';

const app = () => (
  <div className="app">
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="calculator" element={<Calculator />} />
      <Route path="quotes" element={<Quotes />} />
      <Route path="about" element={<About />} />
    </Routes>
  </div>
);
export default app;
// function Home() {
//   return (
//     <>
//       <nav>
//         <Link to="/">Home</Link>
//         <Link to="/about">About</Link>
//       </nav>
//       <main>
//         <h2>Welcome to the homepage!</h2>
//         <p>You can do this, I believe in you.</p>
//       </main>
//     </>
//   );
// }

// function About() {
//   return (
//     <>
//       <nav>
//         <Link to="/">Home</Link>
//       </nav>
//       <main>
//         <h2>Who are we?</h2>
//         <p>
//           That feels like an existential question, don&lsquo;t you
//           think?
//         </p>
//       </main>

//     </>
//   );
// }
