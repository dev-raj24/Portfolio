import { motion } from "framer-motion";

const DeveloperSvg = () => {
  return (
    <motion.svg
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background glow */}
      <defs>
        <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
          <stop
            offset="0%"
            stopColor="hsl(160, 100%, 45%)"
            stopOpacity="0.15"
          />
          <stop offset="100%" stopColor="hsl(160, 100%, 45%)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="screenGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(160, 100%, 45%)" stopOpacity="0.3" />
          <stop
            offset="100%"
            stopColor="hsl(270, 80%, 60%)"
            stopOpacity="0.3"
          />
        </linearGradient>
        <linearGradient id="codeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(160, 100%, 45%)" />
          <stop offset="50%" stopColor="hsl(200, 100%, 60%)" />
          <stop offset="100%" stopColor="hsl(270, 80%, 60%)" />
        </linearGradient>
      </defs>

      {/* Background circle glow */}
      <circle cx="250" cy="250" r="200" fill="url(#bgGlow)" />

      {/* Desk */}
      <motion.rect
        x="80"
        y="350"
        width="340"
        height="12"
        rx="6"
        fill="hsl(220, 18%, 12%)"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      />
      <rect
        x="130"
        y="362"
        width="15"
        height="60"
        fill="hsl(220, 18%, 10%)"
        rx="2"
      />
      <rect
        x="355"
        y="362"
        width="15"
        height="60"
        fill="hsl(220, 18%, 10%)"
        rx="2"
      />

      {/* Monitor Stand */}
      <rect
        x="230"
        y="310"
        width="40"
        height="40"
        fill="hsl(220, 15%, 15%)"
        rx="3"
      />
      <rect
        x="200"
        y="340"
        width="100"
        height="10"
        fill="hsl(220, 15%, 12%)"
        rx="5"
      />

      {/* Monitor */}
      <motion.g
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <rect
          x="120"
          y="140"
          width="260"
          height="170"
          rx="10"
          fill="hsl(220, 18%, 8%)"
          stroke="hsl(220, 15%, 20%)"
          strokeWidth="2"
        />
        <rect
          x="130"
          y="150"
          width="240"
          height="150"
          rx="5"
          fill="hsl(220, 20%, 5%)"
        />

        {/* Screen glow effect */}
        <rect
          x="130"
          y="150"
          width="240"
          height="150"
          rx="5"
          fill="url(#screenGlow)"
          opacity="0.5"
        />

        {/* Code lines on screen */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          {/* Line numbers */}
          <text
            x="140"
            y="175"
            fill="hsl(220, 15%, 35%)"
            fontSize="10"
            fontFamily="monospace"
          >
            1
          </text>
          <text
            x="140"
            y="195"
            fill="hsl(220, 15%, 35%)"
            fontSize="10"
            fontFamily="monospace"
          >
            2
          </text>
          <text
            x="140"
            y="215"
            fill="hsl(220, 15%, 35%)"
            fontSize="10"
            fontFamily="monospace"
          >
            3
          </text>
          <text
            x="140"
            y="235"
            fill="hsl(220, 15%, 35%)"
            fontSize="10"
            fontFamily="monospace"
          >
            4
          </text>
          <text
            x="140"
            y="255"
            fill="hsl(220, 15%, 35%)"
            fontSize="10"
            fontFamily="monospace"
          >
            5
          </text>
          <text
            x="140"
            y="275"
            fill="hsl(220, 15%, 35%)"
            fontSize="10"
            fontFamily="monospace"
          >
            6
          </text>

          {/* Code syntax */}
          <text
            x="160"
            y="175"
            fill="hsl(270, 80%, 60%)"
            fontSize="10"
            fontFamily="monospace"
          >
            const
          </text>
          <text
            x="195"
            y="175"
            fill="hsl(210, 20%, 95%)"
            fontSize="10"
            fontFamily="monospace"
          >
            developer
          </text>
          <text
            x="265"
            y="175"
            fill="hsl(160, 100%, 45%)"
            fontSize="10"
            fontFamily="monospace"
          >
            =
          </text>
          <text
            x="280"
            y="175"
            fill="hsl(35, 100%, 60%)"
            fontSize="10"
            fontFamily="monospace"
          >
            {"{"}
          </text>

          <text
            x="170"
            y="195"
            fill="hsl(200, 100%, 60%)"
            fontSize="10"
            fontFamily="monospace"
          >
            name:
          </text>
          <text
            x="210"
            y="195"
            fill="hsl(35, 100%, 60%)"
            fontSize="10"
            fontFamily="monospace"
          >
            "Rajdeep Singh"
          </text>

          <text
            x="170"
            y="215"
            fill="hsl(200, 100%, 60%)"
            fontSize="10"
            fontFamily="monospace"
          >
            skills:
          </text>
          <text
            x="220"
            y="215"
            fill="hsl(270, 80%, 60%)"
            fontSize="10"
            fontFamily="monospace"
          >
            ["React", "Next.js"]
          </text>

          <text
            x="170"
            y="235"
            fill="hsl(200, 100%, 60%)"
            fontSize="10"
            fontFamily="monospace"
          >
            passion:
          </text>
          <text
            x="235"
            y="235"
            fill="hsl(35, 100%, 60%)"
            fontSize="10"
            fontFamily="monospace"
          >
            "Building great web"
          </text>

          <text
            x="170"
            y="255"
            fill="hsl(200, 100%, 60%)"
            fontSize="10"
            fontFamily="monospace"
          >
            coffee:
          </text>
          <text
            x="225"
            y="255"
            fill="hsl(160, 100%, 45%)"
            fontSize="10"
            fontFamily="monospace"
          >
            true
          </text>

          <text
            x="160"
            y="275"
            fill="hsl(35, 100%, 60%)"
            fontSize="10"
            fontFamily="monospace"
          >
            {"}"}
          </text>
        </motion.g>

        {/* Cursor blink */}
        <motion.rect
          x="175"
          y="265"
          width="8"
          height="14"
          fill="hsl(160, 100%, 45%)"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </motion.g>

      {/* Character */}
      <motion.g
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        {/* Body/Hoodie */}
        <ellipse cx="250" cy="420" rx="55" ry="30" fill="hsl(220, 18%, 12%)" />
        <path
          d="M195 380 Q200 420 195 450 L305 450 Q300 420 305 380 Q250 360 195 380"
          fill="hsl(220, 18%, 15%)"
        />

        {/* Hoodie details */}
        <path
          d="M230 380 L250 410 L270 380"
          stroke="hsl(220, 15%, 25%)"
          strokeWidth="2"
          fill="none"
        />

        {/* Head */}
        <ellipse cx="250" cy="340" rx="45" ry="50" fill="hsl(25, 60%, 65%)" />

        {/* Hair */}
        <path
          d="M205 320 Q210 280 250 275 Q290 280 295 320 Q285 310 250 315 Q215 310 205 320"
          fill="hsl(220, 20%, 12%)"
        />
        <path d="M210 325 Q220 310 235 320" fill="hsl(220, 20%, 12%)" />

        {/* Glasses */}
        <rect
          x="218"
          y="330"
          width="25"
          height="18"
          rx="4"
          fill="none"
          stroke="hsl(220, 15%, 30%)"
          strokeWidth="2"
        />
        <rect
          x="257"
          y="330"
          width="25"
          height="18"
          rx="4"
          fill="none"
          stroke="hsl(220, 15%, 30%)"
          strokeWidth="2"
        />
        <line
          x1="243"
          y1="339"
          x2="257"
          y2="339"
          stroke="hsl(220, 15%, 30%)"
          strokeWidth="2"
        />

        {/* Screen reflection on glasses */}
        <rect
          x="220"
          y="332"
          width="21"
          height="14"
          rx="3"
          fill="url(#screenGlow)"
          opacity="0.4"
        />
        <rect
          x="259"
          y="332"
          width="21"
          height="14"
          rx="3"
          fill="url(#screenGlow)"
          opacity="0.4"
        />

        {/* Eyes behind glasses */}
        <circle cx="230" cy="340" r="3" fill="hsl(220, 20%, 15%)" />
        <circle cx="270" cy="340" r="3" fill="hsl(220, 20%, 15%)" />

        {/* Smile */}
        <path
          d="M238 360 Q250 370 262 360"
          stroke="hsl(220, 20%, 25%)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />

        {/* Arms on keyboard */}
        <ellipse cx="180" cy="380" rx="20" ry="15" fill="hsl(220, 18%, 15%)" />
        <ellipse cx="320" cy="380" rx="20" ry="15" fill="hsl(220, 18%, 15%)" />

        {/* Hands */}
        <ellipse cx="175" cy="355" rx="12" ry="10" fill="hsl(25, 60%, 65%)" />
        <ellipse cx="325" cy="355" rx="12" ry="10" fill="hsl(25, 60%, 65%)" />
      </motion.g>

      {/* Keyboard */}
      <motion.g
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <rect
          x="170"
          y="345"
          width="160"
          height="45"
          rx="5"
          fill="hsl(220, 18%, 10%)"
          stroke="hsl(220, 15%, 20%)"
          strokeWidth="1"
        />

        {/* Key rows */}
        {[0, 1, 2].map((row) => (
          <g key={row}>
            {[...Array(10)].map((_, i) => (
              <motion.rect
                key={`${row}-${i}`}
                x={180 + i * 14}
                y={352 + row * 12}
                width="10"
                height="8"
                rx="2"
                fill="hsl(220, 15%, 18%)"
                animate={{
                  fill: [
                    "hsl(220, 15%, 18%)",
                    "hsl(160, 100%, 45%)",
                    "hsl(220, 15%, 18%)",
                  ],
                }}
                transition={{
                  duration: 0.3,
                  delay: Math.random() * 2 + row * 0.5,
                  repeat: Infinity,
                  repeatDelay: Math.random() * 3 + 1,
                }}
              />
            ))}
          </g>
        ))}
      </motion.g>

      {/* Coffee mug */}
      <motion.g
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.9, type: "spring" }}
      >
        <rect
          x="380"
          y="320"
          width="30"
          height="30"
          rx="3"
          fill="hsl(220, 18%, 15%)"
        />
        <path
          d="M410 330 Q425 330 425 345 Q425 350 410 350"
          fill="none"
          stroke="hsl(220, 18%, 15%)"
          strokeWidth="4"
        />

        {/* Steam */}
        <motion.path
          d="M388 315 Q385 305 390 295"
          stroke="hsl(220, 15%, 40%)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          animate={{ y: [0, -5, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.path
          d="M398 318 Q402 308 398 298"
          stroke="hsl(220, 15%, 40%)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          animate={{ y: [0, -5, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        />
      </motion.g>

      {/* Floating code symbols */}
      <motion.text
        x="80"
        y="180"
        fill="url(#codeGradient)"
        fontSize="20"
        fontFamily="monospace"
        animate={{ y: [180, 170, 180], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        {"</>"}
      </motion.text>

      <motion.text
        x="400"
        y="200"
        fill="hsl(160, 100%, 45%)"
        fontSize="18"
        fontFamily="monospace"
        animate={{ y: [200, 190, 200], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
      >
        {"{ }"}
      </motion.text>

      <motion.text
        x="420"
        y="280"
        fill="hsl(270, 80%, 60%)"
        fontSize="16"
        fontFamily="monospace"
        animate={{ y: [280, 270, 280], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      >
        {"( )"}
      </motion.text>

      <motion.text
        x="60"
        y="280"
        fill="hsl(200, 100%, 60%)"
        fontSize="14"
        fontFamily="monospace"
        animate={{ y: [280, 272, 280], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, delay: 0.8 }}
      >
        {"=>"}
      </motion.text>

      {/* Git branch symbol */}
      <motion.g
        animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 0.3 }}
      >
        <circle
          cx="70"
          cy="350"
          r="20"
          fill="hsl(220, 18%, 10%)"
          stroke="hsl(160, 100%, 45%)"
          strokeWidth="1"
        />
        <text
          x="62"
          y="356"
          fill="hsl(160, 100%, 45%)"
          fontSize="14"
          fontFamily="monospace"
        >
          git
        </text>
      </motion.g>

      {/* Terminal icon */}
      <motion.g
        animate={{ y: [0, -6, 0], rotate: [0, -3, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, delay: 0.7 }}
      >
        <rect
          x="410"
          y="120"
          width="35"
          height="25"
          rx="3"
          fill="hsl(220, 18%, 10%)"
          stroke="hsl(270, 80%, 60%)"
          strokeWidth="1"
        />
        <text
          x="416"
          y="138"
          fill="hsl(160, 100%, 45%)"
          fontSize="12"
          fontFamily="monospace"
        >
          $_
        </text>
      </motion.g>
    </motion.svg>
  );
};

export default DeveloperSvg;
