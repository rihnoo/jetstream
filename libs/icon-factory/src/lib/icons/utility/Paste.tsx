import * as React from 'react';
function SvgPaste(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" fill="unset" aria-hidden="true" {...props}>
      <path d="M17.5 12h17c.8 0 1.5-.7 1.5-1.5V6a4 4 0 00-4-4H20a4 4 0 00-4 4v4.5c0 .8.7 1.5 1.5 1.5z" />
      <path d="M44 6h-2.5c-.8 0-1.5.7-1.5 1.5V12a4 4 0 01-4 4H16a4 4 0 01-4-4V7.5c0-.8-.7-1.5-1.5-1.5H8a4 4 0 00-4 4v36a4 4 0 004 4h36a4 4 0 004-4V10a4 4 0 00-4-4zm-6 35c0 .6-.4 1-1 1H15c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h22c.6 0 1 .4 1 1zm0-8c0 .6-.4 1-1 1H15c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h22c.6 0 1 .4 1 1zm0-8c0 .6-.4 1-1 1H15c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h22c.6 0 1 .4 1 1z" />
    </svg>
  );
}
export default SvgPaste;
