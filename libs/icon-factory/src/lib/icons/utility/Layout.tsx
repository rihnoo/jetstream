import * as React from 'react';
function SvgLayout(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" fill="unset" aria-hidden="true" {...props}>
      <path d="M48 50H4a2 2 0 01-2-2V4c0-1.1.9-2 2-2h44a2 2 0 012 2v44a2 2 0 01-2 2zM6 46h40V6H6z" />
      <path d="M39 20H13c-.6 0-1-.4-1-1v-6c0-.6.4-1 1-1h26c.6 0 1 .4 1 1v6c0 .6-.4 1-1 1zM19 40h-6c-.6 0-1-.4-1-1V27c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v12c0 .6-.4 1-1 1zm20 0H27c-.6 0-1-.4-1-1V27c0-.6.4-1 1-1h12c.6 0 1 .4 1 1v12c0 .6-.4 1-1 1z" />
    </svg>
  );
}
export default SvgLayout;
