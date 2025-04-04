import * as React from 'react';
function SvgPin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 520" fill="unset" aria-hidden="true" {...props}>
      <path d="M495 154L360 19c-14-14-36-14-50 0s-14 36 0 50l7 7-162 107-5-5c-14-14-36-14-50 0s-14 36 0 50l72 72L24 448a36 36 0 000 51 36 36 0 0051 0l148-149 63 63a35 35 0 0050 0 35 35 0 000-50l-5-5 106-163 7 7a35 35 0 0050 0c14-12 14-34 1-48z" />
    </svg>
  );
}
export default SvgPin;
