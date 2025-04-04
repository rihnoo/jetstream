import * as React from 'react';
function SvgSort(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" fill="unset" aria-hidden="true" {...props}>
      <path d="M509 377c7-7 7-19 0-26L366 207c-7-7-19-7-26 0L197 351c-7 7-7 19 0 26l26 26c7 7 19 7 26 0l45-45c7-7 21-2 21 9v264c0 10 9 19 19 19h37c10 0 19-10 19-19V367c0-11 14-16 21-9l45 45c7 7 19 7 26 0zm274 249l-26-25c-7-7-19-7-26 0l-45 45c-7 7-21 2-21-9V371c0-10-9-19-19-19h-37c-10 0-19 10-19 19v264c0 11-14 16-21 9l-45-45c-7-7-19-7-26 0l-26 27c-7 7-7 19 0 26l143 143c7 7 19 7 26 0l143-143c7-7 7-20-1-26z" />
    </svg>
  );
}
export default SvgSort;
