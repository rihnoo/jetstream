import * as React from 'react';
function SvgWorkStep(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="unset" aria-hidden="true" {...props}>
      <path d="M39 32h22a2 2 0 002-2v-4a6 6 0 00-6-6H43a6 6 0 00-6 6v4a2 2 0 002 2zm33-7h-2a1 1 0 00-1 1v4a8 8 0 01-8 8H39a8 8 0 01-8-8v-4a1 1 0 00-1-1h-2a6 6 0 00-6 6v43a6 6 0 006 6h44a6 6 0 006-6V31a6 6 0 00-6-6zM57 64a2 2 0 01-2 2H35a2 2 0 01-2-2v-2a2 2 0 012-2h20a2 2 0 012 2zm10-10a2 2 0 01-2 2H35a2 2 0 01-2-2v-2a2 2 0 012-2h30a2 2 0 012 2z" />
    </svg>
  );
}
export default SvgWorkStep;
