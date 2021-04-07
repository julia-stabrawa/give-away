import React from "react";
import Hero from "../organisms/Hero";
import Project from "../organisms/Project";
import About from "../organisms/About";
import Foundation from "../organisms/Foundation";
import Contact from "../organisms/Contact";

function Home() {
    return (
        <div>
            <Hero id="/"/>
            <Project id="what"/>
            <About id="about"/>
            <Foundation id="fund"/>
            <Contact id="contact"/>
        </div>
    );
}

export default Home;
