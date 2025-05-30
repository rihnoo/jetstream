import * as React from 'react';
function SvgOpportunity(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" fill="unset" aria-hidden="true" {...props}>
      <path d="M711 690H289c-10 0-19 9-19 19v1c0 33 27 60 60 60h340c33 0 60-27 60-60v-1c0-10-9-19-19-19zm49-410a60 60 0 00-39 106c-17 39-56 66-102 64-53-3-96-46-99-99 0-9 0-17 2-25a60 60 0 00-22-116 60 60 0 00-22 116c2 8 2 16 2 25-3 53-46 96-99 99-46 3-86-25-102-64a60 60 0 00-39-106c-33 0-60 27-60 60s27 60 60 60l28 214c1 9 9 16 19 16h426c9 0 17-7 19-16l28-214c33 0 60-27 60-60s-27-60-60-60z" />
    </svg>
  );
}
export default SvgOpportunity;
