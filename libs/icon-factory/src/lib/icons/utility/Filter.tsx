import * as React from 'react';
function SvgFilter(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 520" fill="unset" aria-hidden="true" {...props}>
      <path d="M244 318c-6-6-15-6-21 0l-36 36c-6 6-17 2-17-7V215c0-8-7-15-15-15h-30c-8 0-15 7-15 15v132c0 9-11 13-17 7l-36-36c-6-6-15-6-21 0l-22 22c-6 6-6 15 0 21l115 115c6 6 15 6 21 0l116-116c6-6 6-15 0-21zM510 95c0-8-7-15-15-15H125c-8 0-15 7-15 15v30c0 8 7 15 15 15h370c8 0 15-7 15-15zm0 120c0-8-7-15-15-15H225c-8 0-15 7-15 15v30c0 8 7 15 15 15h270c8 0 15-7 15-15zm0 120c0-8-7-15-15-15H325c-8 0-15 7-15 15v30c0 8 7 15 15 15h170c8 0 15-7 15-15z" />
    </svg>
  );
}
export default SvgFilter;
