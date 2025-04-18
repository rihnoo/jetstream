import * as React from 'react';
function SvgDefer(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 520" fill="unset" aria-hidden="true" {...props}>
      <path d="M260 20C128 20 20 128 20 260s108 240 240 240 240-108 240-240S392 20 260 20zm0 420c-99 0-180-81-180-180S161 80 260 80s180 81 180 180-81 180-180 180zm34-178c-3-3-4-7-4-11v-96c0-8-7-15-15-15h-30c-8 0-15 7-15 15v121c0 4 2 8 4 11l74 74c6 6 15 6 21 0l21-21c6-6 6-15 0-21z" />
    </svg>
  );
}
export default SvgDefer;
