import * as React from 'react';
function SvgLead(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 520" fill="unset" aria-hidden="true" {...props}>
      <path d="M484 212H36c-16 0-22 20-9 29l117 75c6 4 9 11 6 18l-43 146c-5 16 16 27 28 15l113-120c6-7 18-7 24 0l114 120c11 12 32 1 28-15l-44-146c-2-7 0-14 6-18l117-75c13-9 7-29-9-29z" />
      <circle cx={260} cy={92} r={72} />
    </svg>
  );
}
export default SvgLead;
