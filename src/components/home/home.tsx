import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>This is a react experiment project of mine.</p>
      </main>
      <nav>
        <Link to="/GlassCalc">Go to Glass Calc</Link>
      </nav>
    </>
  );
}

export default Home;