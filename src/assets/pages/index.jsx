import Navigation from "../components/Navigation"
import React from "react"
function Index() {
  return (
    <React.Fragment>
      <Navigation />
      <div className="hero  d-flex align-items-center">
        <div className="w-50  h-75 m-auto d-flex flex-column align-items-center">
          <h1 className="hero-title text-center p-2">
            <span className="text-capitalize">welcome</span> to{" "}
            <span className="text-capitalize">postlap</span> <br /> inspiring
            stories & fresh ideas, delivered weekly
          </h1>
          <p className="hero-description text-center">
            <span className="text-capitalize">explore</span> thought-provoking articles, practical tips, and personal
            stories that spark curiosity and empower you to grow.
          </p>
          <button className="hero-btn px-3 py-2 text-capitalize m-4 " type="button">start reading</button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Index