import * as React from 'react';
function SvgComments(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 520" fill="unset" aria-hidden="true" {...props}>
      <path d="M478 310c-1-4-1-8 1-12 13-23 21-49 21-77 0-88-76-160-170-160-44 0-84 16-114 42a204 204 0 01184 198c0 25-5 49-14 71l32-14c4-2 8-3 12-1l61 24c6 2 11-3 9-9zM190 141c-94 0-170 72-170 160 0 28 8 54 21 77 2 4 3 8 1 12l-22 61c-2 6 3 11 9 9l61-24c4-1 8-1 12 1 26 15 56 23 88 23 94 0 170-72 170-160 0-87-76-159-170-159z" />
    </svg>
  );
}
export default SvgComments;
