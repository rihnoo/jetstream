import * as React from 'react';
function SvgVisualforcePage(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" fill="unset" aria-hidden="true" {...props}>
      <path d="M554 536c-6 0-12-5-12-12v-73c0-6 5-12 12-12h75c6 0 12 5 12 12v73c0 6-5 12-12 12zm32 43l-43 47c-3 3-3 7 0 10l43 47c3 3 8 3 11 0l43-47c3-3 3-7 0-10l-43-47c-3-3-8-3-11 0zM364 456l38-22c3-2 8-2 11 0l38 22c3 2 6 6 6 10v43c0 4-2 8-6 10l-38 22c-3 2-8 2-11 0l-38-22c-3-2-6-6-6-10v-43c0-4 2-8 6-10zm374-256H262c-34 0-62 28-62 62v476c0 34 28 62 62 62h476c34 0 62-28 62-62V262c0-34-28-62-62-62zm0 517c0 12-9 21-21 21H283c-11 0-21-9-21-21V382h476zm0-395H262v-39c0-12 9-21 21-21h434c11 0 21 9 21 21z" />
      <circle cx={407} cy={630} r={49} />
    </svg>
  );
}
export default SvgVisualforcePage;
