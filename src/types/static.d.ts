declare module '*.png' {
  const pngContent: string;
  export default pngContent;
}

declare module '*.jpg' {
  const jpg: string;
  export default jpg;
}

declare module '*.woff2' {
  const woff2: string;
  export default woff2;
}

declare module '*.svg' {
  import { FC, SVGProps } from 'react';
  const SvgComponent: FC<SVGProps<SVGSVGElement>>;
  export default SvgComponent;
}

declare module '@site/*' {
  const site: unknown;
  export default site;
}

declare module '@theme/*' {
  const theme: React.ComponentType<Record<string, unknown>>;
  export default theme;
}