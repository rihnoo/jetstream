import * as React from 'react';
function SvgInspectorPanel(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 520" fill="unset" aria-hidden="true" {...props}>
      <path d="M38 453h450c8 0 15-7 15-15v-83c0-8-7-15-15-15H38c-8 0-15 7-15 15v83c0 8 7 15 15 15zm0-386c-8 0-16 7-16 15v204c0 7 8 14 16 14h448c8 0 15-7 15-15V82c0-8-7-15-15-15z" />
    </svg>
  );
}
export default SvgInspectorPanel;
