import * as React from 'react';
function SvgFeed(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 520" fill="unset" aria-hidden="true" {...props}>
      <path d="M252 430l-11-3c-6-3-11-10-12-16l-57-231-49 110a20 20 0 01-20 14H35c-8 0-15-6-15-14v-15c0-8 7-15 15-15h52l69-157c4-8 13-14 23-13s18 7 20 17l59 234 79-171c4-9 13-14 22-13 8 1 16 7 20 15l39 89h68c8 0 15 7 15 15v14c0 8-7 15-15 15h-82c-9 0-17-5-21-13l-25-57-84 183c-5 7-12 12-22 12z" />
    </svg>
  );
}
export default SvgFeed;
