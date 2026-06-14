export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { display: ["Syne","sans-serif"], mono: ["JetBrains Mono","monospace"] },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "float-fast": "float 4s ease-in-out infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "spin-slow": "spin 12s linear infinite",
        "blink": "blink 1s step-end infinite",
      },
      keyframes: {
        float: { "0%,100%":{transform:"translateY(0) rotate(0deg)"},"33%":{transform:"translateY(-20px) rotate(1deg)"},"66%":{transform:"translateY(10px) rotate(-1deg)"} },
        glowPulse: { "0%,100%":{boxShadow:"0 0 20px hsl(262,83%,58%,0.2)"},"50%":{boxShadow:"0 0 50px hsl(262,83%,58%,0.5)"} },
        blink: { "0%,100%":{opacity:"1"},"50%":{opacity:"0"} }
      }
    }
  },
  plugins: []
}
