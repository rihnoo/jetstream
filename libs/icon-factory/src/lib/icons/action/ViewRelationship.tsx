import * as React from 'react';
function SvgViewRelationship(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 520" fill="unset" aria-hidden="true" {...props}>
      <path d="M360 200c0-22-18-40-40-40H60c-22 0-40 18-40 40v260c0 22 18 40 40 40h260c22 0 40-18 40-40zm70 220h-30v-60h30c6 0 10-4 10-10V90c0-6-4-10-10-10H170c-6 0-10 4-10 10v30h-60V90c0-39 31-70 70-70h260c39 0 70 31 70 70v260c0 39-31 70-70 70z" />
    </svg>
  );
}
export default SvgViewRelationship;
