import React from "react";
import Container from "../Container";
import Image from "next/image";
const About = () => {
  return (
    <div id="about" className="bg-gray-100 py-10">
      <h1 className="font-bold text-3xl text-center mb-8">About Us</h1>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[250px]">
            <Image
              src="/images/about3.jpg"
              alt="about"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div>
            <p className="md:text-xl font-semibold text-sm leading-relaxed mb-3">
              <span className="font-bold">
                Hey there, I'm DJ Anthony, the founder of MixZone DJ.
              </span>
              My journey into the world of music is a unique one. With a passion
              for mixing beats, I've rocked dance floors and electrified crowds
              in clubs around the world. From the pulsating rhythms of Ibiza to
              the vibrant scenes of Miami and Tokyo, I've set the stage on fire.
              Join me on this sonic adventure and let's make your music
              experience unforgettable.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
