import React from "react";

const Home = () => {
  const word = process.env.REACT_APP_SECRET;
  return (
    <>
      <hr />
      <p>{word}</p>
      <hr />
      <h1>Home</h1>
    </>
  );
};

export default Home;
