import * as React from 'react';
function SvgIdentity(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" fill="unset" aria-hidden="true" {...props}>
      <path d="M46 8H34.9l.1 1a7 7 0 01-7 7h-6a7 7 0 01-7-7l.1-1H6a4 4 0 00-4 4v30a4 4 0 004 4h40a4 4 0 004-4V12a4 4 0 00-4-4zM21.7 38H10.3C9 38 8 36.8 8 35.5c0-2 2.1-3.1 4.3-4 1.5-.6 1.7-1.2 1.7-1.9 0-.6-.4-1.2-.9-1.7-.9-.8-1.4-2-1.4-3.3 0-2.5 1.5-4.6 4.2-4.6s4.2 2.1 4.2 4.6c0 1.3-.5 2.5-1.4 3.3-.5.5-.9 1.1-.9 1.7 0 .6.2 1.2 1.7 1.9 2.2.9 4.3 2 4.3 4 .2 1.3-.8 2.5-2.1 2.5zM44 34c0 .6-.4 1-1 1H29c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h14c.6 0 1 .4 1 1v2zm2-8c0 .6-.4 1-1 1H29c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h16c.6 0 1 .4 1 1v2z" />
      <path d="M22 12h6c1.7 0 3-1.3 3-3s-1.3-3-3-3h-6c-1.7 0-3 1.3-3 3s1.3 3 3 3z" />
    </svg>
  );
}
export default SvgIdentity;
