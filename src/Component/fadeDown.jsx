import React, { useState, useEffect } from 'react';

function FadeInComponent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the fade-in effect after the component mounts
    setIsVisible(true);
  }, []);

  return (
    <div className="p-8">
      <h1 className={`text-4xl flex justify-center font-bold transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <img src="https://play-lh.googleusercontent.com/Vy7GjKd_v81EiDTw5uWJHU0ORUu4_zuzTqUCNFn4El-Yeh5sDwNI8ccrCPAw7rEWcR4=w240-h480-rw" 
        className = "w-50 h-50 m-10 items-center rounded-xl" alt="test" />
      </h1>
    </div>
  );
}

export default FadeInComponent;
