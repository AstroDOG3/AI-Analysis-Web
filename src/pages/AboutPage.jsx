import React, { useState, useEffect } from 'react';

function AboutPage() {
    return (
        <div>
            <div>
                <h1 className="text-center mt-10">
                    <span className="text-7xl border-b-4 border-black">About us</span>
                </h1>
                <div className="flex justify-center space-x-4">
                    <div className="text-center">
                        <FadeInComponent
                            img_url="https://i1.sndcdn.com/artworks-D4tA2gefvGQHFwjH-oR0vvQ-t500x500.jpg"
                            tw_css="w-80 h-80 mx-auto mt-10 rounded-xl"/>
                        <h1 className="font-bold text-2xl">Paramet Kitchanwit</h1>
                        <h1 className="text-2xl">Frontend Developer</h1>
                    </div>
                    <div className="text-center">
                        <FadeInComponent
                            img_url="https://i1.sndcdn.com/artworks-D4tA2gefvGQHFwjH-oR0vvQ-t500x500.jpg"
                            tw_css="w-50 h-50 mx-auto mt-10 rounded-xl"/>

                        <h1 className="font-bold text-2xl">Dhouchdhanin Leechewyuwasorn</h1>
                        <h1 className="text-2xl">AI Developer</h1>
                    </div>
                    <div className="text-center">
                        <FadeInComponent
                            img_url="https://i1.sndcdn.com/artworks-D4tA2gefvGQHFwjH-oR0vvQ-t500x500.jpg"
                            tw_css="w-80 h-80 mx-auto mt-10 rounded-xl"/>
                        <h1 className="font-bold text-2xl">Sahut Chensirasoorath</h1>
                        <h1 className="text-2xl">Full Stack Developer</h1>

                    </div>
                </div>
            </div>
        </div>
    );
}

function FadeInComponent({ img_url, tw_css }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger the fade-in effect after the component mounts
        setIsVisible(true);
    }, []);

    return (
        <div className="p-8">
            <h1 className={`text-4xl flex justify-center font-bold transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">
                    <img src={img_url} className={tw_css} alt="test" />
                </a>
            </h1>
        </div>
    );
}

export default AboutPage;
