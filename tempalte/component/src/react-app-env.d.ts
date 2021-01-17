declare module '@sc/intl';
declare module 'lodash';

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module '*.less' {
  const classes: { [className: string]: string };
  export default classes;
}
