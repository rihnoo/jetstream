import * as React from 'react';
function SvgProcess(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" fill="unset" aria-hidden="true" {...props}>
      <path d="M376 463l108-134c8-10 23-10 31 0l108 134c4 5 10 7 16 7h121c11 0 20-9 20-20V280c0-33-27-60-60-60H280c-33 0-60 27-60 60v170c0 11 9 20 20 20h120c6 0 12-3 16-7zm247 74L515 671c-8 10-23 10-31 0L376 537c-4-5-10-7-16-7H240c-11 0-20 9-20 20v170c0 33 27 60 60 60h440c33 0 60-27 60-60V550c0-11-9-20-20-20H639c-6 0-12 3-16 7z" />
    </svg>
  );
}
export default SvgProcess;
