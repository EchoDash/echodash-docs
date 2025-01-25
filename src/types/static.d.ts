declare module '*.png' {
  const png: string;
  export default png;
}

declare module '*.jpg' {
  const jpg: string;
  export default jpg;
}

declare module '*.svg' {
  const svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default svg;
}

declare module '@site/*' {
  const site: unknown;
  export default site;
}

declare module '@theme/*' {
  const theme: React.ComponentType<Record<string, unknown>>;
  export default theme;
}