import * as React from 'react';
function SvgDownload(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 520" fill="unset" aria-hidden="true" {...props}>
      <path d="M485 310h-30c-8 0-15 7-15 15v100c0 8-7 15-15 15H95c-8 0-15-7-15-15V325c0-8-7-15-15-15H35c-8 0-15 7-15 15v135a40 40 0 0040 40h400a40 40 0 0040-40V325c0-8-7-15-15-15zm-235 66c6 6 15 6 21 0l135-135c6-6 6-15 0-21l-21-21c-6-6-15-6-21 0l-56 56c-6 6-17 2-17-7V35c-1-8-9-15-16-15h-30c-8 0-15 7-15 15v212c0 9-11 13-17 7l-56-56c-6-6-15-6-21 0l-21 22c-6 6-6 15 0 21z" />
    </svg>
  );
}
export default SvgDownload;
