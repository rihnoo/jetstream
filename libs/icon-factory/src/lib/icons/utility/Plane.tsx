import * as React from 'react';
function SvgPlane(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 520" fill="unset" aria-hidden="true" {...props}>
      <path d="M163 242c0-6.5-8-10.5-13-6.5l-112 86A47.5 47.5 0 0019 360v33c0 5.5 5.5 9.5 10.5 7l123-46.5c6.5-2.5 10.5-8 10.5-15V242zm176.5 224l-33-22V81c0-21.5-23-45.5-38.5-57.5a15.5 15.5 0 00-20 0c-14.5 12-38.5 36-38.5 57.5v363l-37 24a26 26 0 00-11 20v5c0 4 3 7 7 7H345c4 0 9-3 9-7 0-11-6.5-21-15-27zm140-144l-112-86a8 8 0 00-13 6.5V340c0 6.5 4 13 10.5 15l123 46.5c5.5 1.5 10.5-1.5 10.5-7v-33c0-16-7-30.5-19-39z" />
    </svg>
  );
}
export default SvgPlane;
