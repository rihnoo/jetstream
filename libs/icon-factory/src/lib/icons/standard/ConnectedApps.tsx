import * as React from 'react';
function SvgConnectedApps(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" fill="unset" aria-hidden="true" {...props}>
      <path d="M730 210H270c-33 0-60 27-60 60v460c0 33 27 60 60 60h460c33 0 60-27 60-60V270c0-33-27-60-60-60zm-20 520H290c-11 0-20-9-20-20V290c0-11 9-20 20-20h420c11 0 20 9 20 20v420c0 11-9 20-20 20zM585 470h-65l57-94c6-10-1-26-13-26h-83c-12 0-23 8-28 19l-52 138c-4 10 3 23 14 23h66l-32 109c-3 10 10 16 17 8l131-154c8-10 1-23-12-23z" />
    </svg>
  );
}
export default SvgConnectedApps;
