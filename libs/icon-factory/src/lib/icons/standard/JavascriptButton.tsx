import * as React from 'react';
function SvgJavascriptButton(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" fill="unset" aria-hidden="true" {...props}>
      <path d="M630 360h106c8 0 14-6 14-14 0-4-1-7-4-10L614 204c-3-3-6-4-10-4-8 0-14 6-14 14v106c0 22 18 40 40 40zm100 60H590c-33 0-60-27-60-60V220c0-11-9-20-20-20H310c-33 0-60 27-60 60v480c0 33 27 60 60 60h380c33 0 60-27 60-60V440c0-11-9-20-20-20zM378 663c0 29-14 39-36 39l-17-2 3-18 12 2c10 0 16-4 16-20v-65h22zm43 37c-10 0-20-2-29-6l6-18c8 4 16 6 25 6 10 0 16-4 16-11s-5-10-17-14-28-15-28-30 14-30 38-30c9 0 18 1 26 5l-5 18c-7-3-14-5-21-5-10 0-15 5-15 10s6 9 19 14 26 16 26 30-13 31-41 31z" />
    </svg>
  );
}
export default SvgJavascriptButton;
