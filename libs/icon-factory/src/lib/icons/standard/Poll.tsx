import * as React from 'react';
function SvgPoll(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" fill="unset" aria-hidden="true" {...props}>
      <path d="M760 200H240c-22 0-40 18-40 40v80c0 22 18 40 40 40h520c22 0 40-18 40-40v-80c0-22-18-40-40-40zM510 320v-80h250v80zm250 100H240c-22 0-40 18-40 40v80c0 22 18 40 40 40h520c22 0 40-18 40-40v-80c0-22-18-40-40-40zM420 540v-80h340v80zm340 100H240c-22 0-40 18-40 40v80c0 22 18 40 40 40h520c22 0 40-18 40-40v-80c0-22-18-40-40-40zM600 760v-80h160v80z" />
    </svg>
  );
}
export default SvgPoll;
