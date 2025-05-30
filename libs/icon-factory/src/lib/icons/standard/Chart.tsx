import * as React from 'react';
function SvgChart(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" fill="unset" aria-hidden="true" {...props}>
      <path d="M362 564c14 31 39 55 70 70 9 4 13 13 13 22v115c0 16-15 28-31 24a304 304 0 01-214-214c-4-15 8-31 24-31h116c9 0 18 5 22 14zm53-367c15-4 31 8 31 24v115c0 9-5 18-13 22-31 14-55 39-70 70-4 9-13 13-22 13H224c-16 0-28-15-24-31a308 308 0 01215-213zm385 299c0 143-91 264-216 299-15 4-30-8-30-24V654c0-10 5-19 13-24 47-24 80-75 80-134s-33-111-80-134c-8-4-13-14-13-24V221c0-16 15-28 30-24a306 306 0 01216 299z" />
    </svg>
  );
}
export default SvgChart;
