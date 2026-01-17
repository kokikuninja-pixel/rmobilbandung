import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 50"
      width="120"
      height="30"
      {...props}
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: 'hsl(var(--accent))', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <text
        x="10"
        y="35"
        fontFamily="Poppins, sans-serif"
        fontSize="30"
        fontWeight="bold"
        fill="url(#grad1)"
      >
        RMJP
      </text>
      <text
        x="115"
        y="32"
        fontFamily="Poppins, sans-serif"
        fontSize="16"
        fontWeight="300"
        fill="hsl(var(--foreground))"
      >
        Rental
      </text>
    </svg>
  );
}
