import * as React from 'react';
function SvgAnchor(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 520" fill="unset" aria-hidden="true" {...props}>
      <path d="M480 357l-24-102c-3-11-17-15-25-8l-77 71c-9 8-5 22 6 25l33 10-10 20c-18 30-47 49-93 55V178a73 73 0 0044-67c0-40-33-73-73-73a73 73 0 00-73 73c0 30 18 55 44 67v250c-46-6-75-25-93-55l-10-20 33-10c11-3 14-18 6-25l-78-70c-9-8-22-4-25 8L40 357c-3 11 8 21 19 18l26-8c4 11 8 21 14 31 29 49 82 78 160 78s130-29 160-78c6-10 11-21 14-31l26 8c13 3 23-7 21-18zM260 142a29 29 0 110-58 29 29 0 010 58z" />
    </svg>
  );
}
export default SvgAnchor;
