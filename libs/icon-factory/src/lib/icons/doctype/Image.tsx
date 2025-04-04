import * as React from 'react';
function SvgImage(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5600 6400" aria-hidden="true" {...props}>
      <path fill="#06a59a" d="M513 4A507 507 0 005 512v5384c0 280 227 507 508 507h4577c280 0 507-227 507-507V2035L3707 4H512z" />
      <path fill="#056764" d="M5598 2035v100H4318s-631-126-613-671c0 1 21 571 600 571z" />
      <path fill="#acf3e4" d="M3707 0v1456c0 166 111 579 611 579h1280z" />
      <path
        fill="unset"
        d="M1012 5374V3283h2091v2091zm1880-1884H1223v1260h1669zm-959 838l391-526 121 213 140-44 98 563H1375l349-332zm-385-364c-91 0-165-69-165-154s74-154 165-154 165 69 165 154-74 154-165 154z"
      />
    </svg>
  );
}
export default SvgImage;
