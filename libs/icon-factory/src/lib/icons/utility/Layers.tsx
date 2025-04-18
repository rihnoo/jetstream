import * as React from 'react';
function SvgLayers(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" fill="unset" aria-hidden="true" {...props}>
      <path d="M36 20c0-2-2-4-4-4H6c-2 0-4 2-4 4v26c0 2 2 4 4 4h26c2 0 4-2 4-4V20zm7-18H17c-4 0-7 3-7 7v3h26c2 0 4 2 4 4v26h3c4 0 7-3 7-7V9c0-4-3-7-7-7z" />
    </svg>
  );
}
export default SvgLayers;
