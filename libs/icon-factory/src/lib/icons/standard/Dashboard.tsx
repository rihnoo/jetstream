import * as React from 'react';
function SvgDashboard(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" fill="unset" aria-hidden="true" {...props}>
      <path d="M500 200c-165 0-300 135-300 300s135 300 300 300 300-135 300-300-135-300-300-300zm0 80c121 0 220 99 220 220l-2 30h-89c-10 0-18 7-20 17-8 52-54 93-109 93s-101-41-109-93c-1-10-10-17-20-17h-89l-2-30c0-121 99-220 220-220zm-23 294c24 13 55 3 68-21 19-35 55-189 46-193-9-5-116 111-134 147-14 24-5 54 20 67z" />
    </svg>
  );
}
export default SvgDashboard;
