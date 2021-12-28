import React from "react";
import Header from "../../components/home/header";
import Footer from "../../components/home/footer";

export default function Home() {
  return (
    <div>
      <Header />
      <div>
        <h1>Home</h1>
        <h3>It's React Home route</h3>
      </div>
      <Footer />
    </div>
  );
}
