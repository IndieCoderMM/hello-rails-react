import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section>
      <h1>Welcome to My Greeting App!</h1>
      <p>Click the button below to get a random greeting.</p>
      <Link to="/greeting">
        <button>Random Greeting</button>
      </Link>
    </section>
  );
}

export default Home;
