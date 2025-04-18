import * as React from 'react';
function SvgForecasts(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" fill="unset" aria-hidden="true" {...props}>
      <path d="M777 292s-35-72-113-72-115 74-115 74c-52-25-99 0-99 0s-36-74-114-74-113 72-113 72-73 163-75 309c-2 144 95 179 141 179 50 0 168-21 162-185 0 0 12-28 45-27 40 0 54 27 54 27-6 164 112 185 161 185 45 0 143-35 141-179-2-146-75-309-75-309zM298 716a87 87 0 110-174 87 87 0 010 174zm404 0a87 87 0 110-174 87 87 0 010 174z" />
    </svg>
  );
}
export default SvgForecasts;
