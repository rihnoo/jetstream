import * as React from 'react';
function SvgScanCard(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" fill="unset" aria-hidden="true" {...props}>
      <path d="M740 300H260c-33 0-60 27-60 60v280c0 33 27 60 60 60h480c33 0 60-27 60-60V360c0-33-27-60-60-60zM250 530c-17 0-30-13-30-30s13-30 30-30 30 13 30 30-13 30-30 30zm470 90c0 11-9 20-20 20H320c-11 0-20-9-20-20V380c0-11 9-20 20-20h380c11 0 20 9 20 20zm-80-200H380c-11 0-20 9-20 20v120c0 11 9 20 20 20h260c11 0 20-9 20-20V440c0-11-9-20-20-20z" />
    </svg>
  );
}
export default SvgScanCard;
