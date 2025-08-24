import React from "react";

function waves() {
  return (
    <>
      
      <style>
        {`
        .wave-container {
          position: fixed;
          left: 0;
          bottom: 0;
          width: 200vw;
          height: 120px;
          z-index: -1;
          pointer-events: none;
          overflow: hidden;
        }
        .waves {
          width: 150vw;
          height: 150px;
          display: block;
        }
        .wave1,
        .wave2 {
          animation: moveWaves 8s linear infinite;
        }
        .wave2 {
          animation-delay: -4s;
        }
        @keyframes moveWaves {
          0% { transform: translateX(0); }
          100% { transform: translateX(-120px); }
        }
        `}
      </style>
      <div className="wave-container">
        <svg
          className="waves"
          viewBox="100 0 1440 400"
          preserveAspectRatio="none"
        >
          <path
            className="wave1"
            fill="#95afc0"
            fillOpacity="0.7"
            d="M0,208L80,176C160,144,320,80,480,85.3C640,91,800,165,960,186.7C1120,208,1280,176,1360,160L1440,144L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          />
          <path
            className="wave2"
            fill="#535c68"
            fillOpacity="0.4"
            d="M0,288L80,272C160,256,320,224,480,213.3C640,203,800,213,960,208C1120,203,1280,181,1360,170.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          />
        </svg>
      </div>
    </>
  );
}

export default waves;
