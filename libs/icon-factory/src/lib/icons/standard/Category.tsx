import * as React from 'react';
function SvgCategory(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="unset" aria-hidden="true" {...props}>
      <path d="M61.8 29.4l8.9 8.9c2 1.9 2 5.1 0 7L47.5 68.4V36.6l7.2-7.3a5 5 0 017.1.1zM37.5 20H25a5 5 0 00-5 5v43.8a11.2 11.2 0 1022.4 0V25c.1-2.8-2.2-5-4.9-5zm-6.3 53.8c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zM75 57.5h-8.8l-6 6H74L73.9 74H49.8l-6 6H75a5 5 0 005-5V62.5a5 5 0 00-5-5z" />
    </svg>
  );
}
export default SvgCategory;
