import * as React from 'react';
function SvgVariable(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" fill="unset" aria-hidden="true" {...props}>
      <path d="M709 397c31 0 91-25 91-106s-58-85-76-85c-36 0-71 26-102 79l-66 115h-1l-17-84c-6-33-45-106-125-106s-153 46-153 46a49 49 0 0047 85s61-34 74 0l11 34c16 52 30 114 42 170l-52 76s-59-21-90-21-92 25-92 106 58 85 76 85c36 0 71-26 102-79l66-115c10 50 19 90 24 106 20 57 66 91 127 91 0 0 63 0 137-42 18-7 31-25 31-45 0-27-22-49-49-49-8 0-15 2-21 5 0 0-53 30-71 6-13-25-24-57-32-97l-25-119 53-77c1 0 60 21 91 21z" />
    </svg>
  );
}
export default SvgVariable;
