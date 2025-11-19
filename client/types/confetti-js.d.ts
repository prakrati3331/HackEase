declare module 'confetti-js' {
  interface ConfettiSettings {
    target?: HTMLCanvasElement;
    max?: number;
    size?: number;
    animate?: boolean;
    respawn?: boolean;
    width?: number;
    height?: number;
    clock?: number;
    start_from_edge?: boolean;
    speed?: number;
    props?: string[];
    colors?: number[][];
    rotate?: boolean;
  }

  class ConfettiGenerator {
    constructor(settings: ConfettiSettings);
    render(): void;
    clear(): void;
  }

  export default ConfettiGenerator;
}