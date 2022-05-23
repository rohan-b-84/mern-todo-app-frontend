import React from "react";
import { Link } from "react-router-dom";
export default function Homepage() {
  return (
    <>
      <main className="home-page">
        <section>
          <h1>
            Keep your life
            <br />
            stay under control
          </h1>
          <p>
            Chill on the couch table walk on a keyboard hell is other people nya
            nya nyan. Balinese mouser and savannah turkish angora or puma
            british shorthair birman. Sphynx cornish rex ocicat ocicat.
            Himalayan malkin, or lion yet jaguar devonshire
          </p>
          <div className="btn-container">
            <Link className="btn btn-login" to="/login">
              Login
            </Link>
            <Link className="btn btn-signup" to="/signup">
              Sign Up
            </Link>
          </div>
        </section>
        <aside></aside>
      </main>
    </>
  );
}
//
