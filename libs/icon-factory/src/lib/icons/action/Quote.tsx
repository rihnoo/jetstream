import * as React from 'react';
function SvgQuote(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 520" fill="unset" aria-hidden="true" {...props}>
      <path d="M350 230H170c-6 0-10 4-10 10v30c0 6 4 10 10 10h180c6 0 10-4 10-10v-30c0-6-4-10-10-10zm-20 90H190c-6 0-10 4-10 10v30c0 6 4 10 10 10h140c6 0 10-4 10-10v-30c0-6-4-10-10-10zm128-197l-96-92c-8-7-18-11-28-11H186c-10 0-20 4-28 11l-96 92c-8 8-12 18-12 29v308c0 22 18 40 40 40h340c22 0 40-18 40-40V152c0-11-4-21-12-29zM260 50c22 0 40 18 40 40s-18 40-40 40-40-18-40-40 18-40 40-40zm150 375c0 8-7 15-15 15H125c-8 0-15-7-15-15V175c0-8 7-15 15-15h270c8 0 15 7 15 15z" />
    </svg>
  );
}
export default SvgQuote;
