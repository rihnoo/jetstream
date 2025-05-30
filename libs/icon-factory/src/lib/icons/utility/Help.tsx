import * as React from 'react';
function SvgHelp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 520" fill="unset" aria-hidden="true" {...props}>
      <path d="M284 380h-50c-8 0-14-6-14-14v-15c0-42 27-80 67-94a80 80 0 00-24-155c-22-1-43 7-59 22a70.4 70.4 0 00-23 44c-1 6-7 11-15 11h-50c-9 0-16-7-15-16 4-38 21-72 48-99 32-30 73-46 117-45 83 3 151 71 154 154 3 70-40 133-105 157-9 4-15 11-15 20v15c0 9-8 15-16 15zm16 105c0 8-7 15-15 15h-50c-8 0-15-7-15-15v-50c0-8 7-15 15-15h50c8 0 15 7 15 15z" />
    </svg>
  );
}
export default SvgHelp;
