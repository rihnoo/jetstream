import * as React from 'react';
function SvgQuip(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 520" fill="unset" aria-hidden="true" {...props}>
      <path d="M245 21C125 28 28 125 21 245 11 383 122 500 260 500h240V260c0-138-117-249-255-239zm-99 134c0-9 7-16 16-16h196c9 0 16 7 16 16v16c0 9-7 16-16 16H161c-9 0-16-7-16-16 1 1 1-16 1-16zm228 208c0 9-7 16-16 16H161c-9 0-16-7-16-16v-16c0-9 7-16 16-16h196c9 0 16 7 16 16v16h1zm60-95c0 9-7 16-16 16H101c-9 0-16-7-16-16v-16c0-9 7-16 16-16h317c9 0 16 7 16 16v16z" />
    </svg>
  );
}
export default SvgQuip;
