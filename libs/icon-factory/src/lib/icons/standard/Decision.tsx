import * as React from 'react';
function SvgDecision(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" fill="unset" aria-hidden="true" {...props}>
      <path d="M794 288l-52-39c-8-5-15-8-24-8H540v-21c0-11-9-20-20-20h-40c-11 0-20 9-20 20v20H260c-11 0-20 9-20 20v80c0 11 9 20 20 20h458c9 0 18-2 24-8l52-39c8-7 8-19 0-25zm-54 172H540v-30c0-6-4-10-10-10h-60c-6 0-10 4-10 10v30H283c-9 0-18 2-24 8l-52 39c-9 6-9 19 0 26l52 39c8 5 15 8 24 8h457c11 0 20-9 20-20v-80c0-11-9-20-20-20zM540 716v-49c0-6-4-10-10-10h-60c-6 0-10 4-10 10v49c-40 11-62 35-69 65-2 9 5 19 15 19h189c10 0 18-9 15-19-7-30-30-53-70-65z" />
    </svg>
  );
}
export default SvgDecision;
