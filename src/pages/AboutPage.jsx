import React, { useState, useEffect } from 'react';

function AboutPage() {
    return (
        <div className="container mx-auto px-4">
            <div>
                <h1 className="flex items-center justify-center mt-10">
                    <span className="text-4xl sm:text-5xl md:text-7xl border-b-4 border-black">About us</span>
                </h1>
                <div className="flex flex-col md:flex-row justify-center md:space-x-10 space-y-8 md:space-y-0 mt-0 md:mt-10">
                    <div className="text-center">
                        <FadeInComponent
                            img_url="https://i.pinimg.com/originals/36/e1/ee/36e1ee31bfb9db608eb1c235d2b0a921.gif"
                            tw_css="w-40 h-40 sm:w-60 sm:h-60 mt-0 md:mt-3 rounded-xl"
                        />
                        <h1 className="font-bold text-xl sm:text-2xl">Paramet Kitchanwit</h1>
                        <h1 className="text-lg sm:text-2xl">Frontend Developer</h1>
                    </div>
                    <div className="text-center">
                        <FadeInComponent
                            img_url="https://play-lh.googleusercontent.com/Vy7GjKd_v81EiDTw5uWJHU0ORUu4_zuzTqUCNFn4El-Yeh5sDwNI8ccrCPAw7rEWcR4=w240-h480-rw"
                            tw_css="w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 mt-0 md:mt-3 rounded-xl"
                        />
                        <h1 className="font-bold text-xl sm:text-2xl">Dhouchdhanin Leechewyuwasorn</h1>
                        <h1 className="text-lg sm:text-2xl">AI Developer</h1>
                    </div>
                    <div className="text-center">
                        <FadeInComponent
                            img_url="https://play-lh.googleusercontent.com/Vy7GjKd_v81EiDTw5uWJHU0ORUu4_zuzTqUCNFn4El-Yeh5sDwNI8ccrCPAw7rEWcR4=w240-h480-rw"
                            tw_css="w-40 h-40 sm:w-60 sm:h-60 mt-0 md:mt-3 rounded-xl"
                        />
                        <h1 className="font-bold text-xl sm:text-2xl">Sahut Chensirasoorath</h1>
                        <h1 className="text-lg sm:text-2xl">Full Stack Developer</h1>
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
