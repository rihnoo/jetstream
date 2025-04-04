import * as React from 'react';
function SvgFullWidthView(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 520" fill="unset" aria-hidden="true" {...props}>
      <path d="M485 40H35c-8 0-15 7-15 15v50c0 8 7 15 15 15h450c8 0 15-7 15-15V55c-1-8-7-15-15-15zM107 160H37c-8 0-15 7-15 15v298c0 8 7 15 15 15h70c8 0 15-7 15-15V175c0-8-7-15-15-15zm378 0h-70c-8 0-15 7-15 15v298c0 8 7 15 15 15h70c8 0 15-7 15-15V175c0-8-7-15-15-15zm-140 0H177c-8 0-15 7-15 15v298c0 8 7 15 15 15h168c8 0 15-7 15-15V175c0-8-7-15-15-15z" />
    </svg>
  );
}
export default SvgFullWidthView;
