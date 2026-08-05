import { useId } from "react";
import clsx from "clsx";

export default function FunngroLogo({
  className = "",
  ...props
}) {
  const id = useId();

  const barGrad = `${id}-barGrad`;
  const wingTop = `${id}-wingTop`;
  const wingBottom = `${id}-wingBottom`;
  const smileGrad = `${id}-smileGrad`;

  return (
    <svg
      viewBox="0 0 800 260"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      role="img"
      aria-label="Funngro Logo"
      className={clsx("h-10 w-auto", className)}
      {...props}
    >
      <defs>
        <linearGradient
          id={barGrad}
          x1="0%"
          y1="0%"
          x2="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#86EFAC" />
          <stop offset="100%" stopColor="#22C55E" />
        </linearGradient>

        <linearGradient
          id={wingTop}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#A7F3D0" />
          <stop offset="100%" stopColor="#34D399" />
        </linearGradient>

        <linearGradient
          id={wingBottom}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>

        <linearGradient
          id={smileGrad}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#4ADE80" />
        </linearGradient>
      </defs>

      <g transform="translate(25 20)">
        {/* Growth Bars */}

        <g fill={`url(#${barGrad})`}>
          <rect x="75" y="65" width="18" height="45" rx="5" />
          <rect x="100" y="50" width="18" height="60" rx="5" />
          <rect x="125" y="35" width="18" height="75" rx="5" />
          <rect x="150" y="20" width="18" height="90" rx="5" />
        </g>

        {/* Paper Plane */}

        <g>
          <polygon
            points="40,125 185,75 110,158"
            fill={`url(#${wingTop})`}
          />

          <polygon
            points="110,158 185,75 132,124"
            fill={`url(#${wingBottom})`}
          />

          <polygon
            points="40,125 185,75 105,120"
            fill="#34D399"
            opacity=".9"
          />
        </g>

        {/* Growth Path */}

        <g>
          <circle
            cx="42"
            cy="180"
            r="8"
            stroke="#16A34A"
            strokeWidth="2.5"
            fill="none"
          />

          <circle
            cx="42"
            cy="180"
            r="2.5"
            fill="#16A34A"
          />

          <path
            d="M50 185
               C72 228,
               170 208,
               192 135"
            stroke="#16A34A"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />

          <path
            d="M180 143
               L193 129
               L194 148 Z"
            fill="#16A34A"
          />
        </g>

        {/* Wordmark */}

        <g transform="translate(235 130)">
          <text
            x="0"
            y="0"
            fill="currentColor"
            fontFamily="Inter, Plus Jakarta Sans, sans-serif"
            fontWeight="800"
            fontSize="88"
            letterSpacing="-2"
          >
            Funngro
          </text>

          {/* Smile */}

          <path
            d="
              M335 18
              C348 39,
              388 39,
              401 18
              C388 30,
              348 30,
              335 18
            "
            fill={`url(#${smileGrad})`}
          />
        </g>
      </g>
    </svg>
  );
}