import * as React from 'react';
function SvgReport(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" fill="unset" aria-hidden="true" {...props}>
      <path d="M390 320h220c11 0 20-9 20-20v-40c0-33-27-60-60-60H430c-33 0-60 27-60 60v40c0 11 9 20 20 20zm330-70h-20c-6 0-10 4-10 10v40c0 44-36 80-80 80H390c-44 0-80-36-80-80v-40c0-6-4-10-10-10h-20c-33 0-60 27-60 60v430c0 33 27 60 60 60h440c33 0 60-27 60-60V310c0-33-27-60-60-60zM430 660c0 11-9 20-20 20h-20c-11 0-20-9-20-20V560c0-11 9-20 20-20h20c11 0 20 9 20 20zm100 0c0 11-9 20-20 20h-20c-11 0-20-9-20-20V470c0-11 9-20 20-20h20c11 0 20 9 20 20zm100 0c0 11-9 20-20 20h-20c-11 0-20-9-20-20V510c0-11 9-20 20-20h20c11 0 20 9 20 20z" />
    </svg>
  );
}
export default SvgReport;
