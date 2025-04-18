import * as React from 'react';
function SvgQuotes(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" fill="unset" aria-hidden="true" {...props}>
      <path d="M720 220H501c-14-1-26 6-36 16L197 505a61 61 0 000 85l212 212c23 23 61 23 85 0l271-272c10-10 16-26 15-40V280c0-33-27-60-60-60zM504 660l-14 14c-8 8-20 8-28 0L326 538c-8-8-8-20 0-28l14-14c8-8 20-8 28 0l136 136c8 8 8 20 0 28zm80-80l-14 14c-8 8-20 8-28 0L406 458c-8-8-8-20 0-28l14-14c8-8 20-8 28 0l136 136c8 8 8 20 0 28zm56-170c-28 0-50-22-50-50s22-50 50-50 50 22 50 50-22 50-50 50z" />
    </svg>
  );
}
export default SvgQuotes;
