import * as React from 'react';
function SvgTextbox(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" fill="unset" aria-hidden="true" {...props}>
      <path d="M740 800H260c-33 0-60-27-60-60V260c0-33 27-60 60-60h480c33 0 60 27 60 60v480c0 33-27 60-60 60zM281 300v400c0 11 9 20 20 20h399c11 0 20-9 20-20V300c0-11-9-20-20-20H301c-11 0-20 9-20 20zm81 319V381c0-11 9-20 20-20h40c11 0 20 9 20 20v238c0 11-9 20-20 20h-40c-11 0-20-9-20-20z" />
    </svg>
  );
}
export default SvgTextbox;
