import * as React from 'react';
function SvgBrush(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 520" fill="unset" aria-hidden="true" {...props}>
      <path d="M494 27c-34-35-224 73-340 259-5 9-2 20 7 24 26 12 47 34 58 61 4 10 15 13 24 7C423 259 528 62 494 27zM119 352c-15 0-29 8-39 18h-1c-5 0-10 8-14 15-16 27-19 59-43 94-4 6-3 15 4 17 34 11 95 1 125-21v1c10-2 7-6 10-6 11-20 20-30 20-49-1-37-27-69-62-69z" />
    </svg>
  );
}
export default SvgBrush;
