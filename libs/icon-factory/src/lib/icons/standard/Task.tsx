import * as React from 'react';
function SvgTask(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" fill="unset" aria-hidden="true" {...props}>
      <path d="M466 237l-21-21c-6-6-15-6-21 0L292 348l-53-53c-6-6-15-6-21 0l-21 21c-6 6-6 15 0 21l74 74a29 29 0 0042 0l153-153c5-5 5-15 0-21zm304 143H510c-11 0-20-9-20-20v-40c0-11 9-20 20-20h260c11 0 20 9 20 20v40c0 11-9 20-20 20zm0 180H450c-11 0-20-9-20-20v-40c0-11 9-20 20-20h320c11 0 20 9 20 20v40c0 11-9 20-20 20zm-440 0h-40c-11 0-20-9-20-20v-40c0-11 9-20 20-20h40c11 0 20 9 20 20v40c0 11-9 20-20 20zm0 180h-40c-11 0-20-9-20-20v-40c0-11 9-20 20-20h40c11 0 20 9 20 20v40c0 11-9 20-20 20zm440 0H450c-11 0-20-9-20-20v-40c0-11 9-20 20-20h320c11 0 20 9 20 20v40c0 11-9 20-20 20z" />
    </svg>
  );
}
export default SvgTask;
