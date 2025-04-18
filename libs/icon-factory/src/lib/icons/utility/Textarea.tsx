import * as React from 'react';
function SvgTextarea(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 520" fill="unset" aria-hidden="true" {...props}>
      <path d="M448 495H72a47 47 0 01-47-47V72c0-26 21-47 47-47h376c26 0 47 21 47 47v376c0 26-21 47-47 47zM88 103v313c0 9 7 16 16 16h313c9 0 16-7 16-16V103c0-9-7-16-16-16H104c-9 1-16 8-16 16zm265 167c8 0 16 7 16 16v68c0 9-7 16-16 16h-72c-9 0-15-7-16-16 0-6 3-10 6-14l15-15 31-28 22-20 6-5 8-2z" />
    </svg>
  );
}
export default SvgTextarea;
