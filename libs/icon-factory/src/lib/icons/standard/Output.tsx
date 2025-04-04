import * as React from 'react';
function SvgOutput(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" fill="unset" aria-hidden="true" {...props}>
      <path d="M208 538h415c11 0 16 14 9 21L512 679c-8 8-8 19 0 26l28 28c8 8 19 8 26 0l219-220c8-8 8-19 0-26L565 267c-8-8-19-8-26 0l-26 26c-8 8-8 19 0 26l120 120c8 9 3 23-9 23H209c-10 0-19 8-19 18v38c0 10 8 20 18 20z" />
    </svg>
  );
}
export default SvgOutput;
