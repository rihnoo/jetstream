import * as React from 'react';
function SvgWorkOrder(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" fill="unset" aria-hidden="true" {...props}>
      <path d="M652 522a97 97 0 00-52 53c-3 7-8 8-8 8H412c-3 0-6-4-8-7-15-35-50-61-90-61-37 0-69 20-86 50-2 4-8 5-12 2-10-9-16-22-16-36 0 0-6-116 33-176 7-10 12-14 21-14h380c4 0 8 0 12 3 0 0 42 64 48 70 5 5 10 9 23 12l81 28c4 2 3 7 3 11v65c0 14-4 27-14 36-4 3-9 2-11-2a97 97 0 00-124-42" />
      <circle cx={690} cy={611} r={49} />
      <circle cx={315} cy={611} r={49} />
    </svg>
  );
}
export default SvgWorkOrder;
