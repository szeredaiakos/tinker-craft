// import * as util from './core/util';
// import { Type as UtilType } from './core/util';

// (globalThis as any).util = util;

// (globalThis as any).trace = (...args: any[]) => { console.log(...args) }
// (globalThis as any).wtrace = (...args: any[]) => { console.warn(...args) }
// (globalThis as any).ttrace = (...args: any[]) => { console.trace(...args) }

// declare global {
//   var util: UtilType;
//   function trace(...args: any[]): void;
//   function wtrace(...args: any[]): void;
//   function ttrace(...args: any[]): void;
// }


import 'react';
declare module 'react' {
  interface CSSProperties {
    [key: `--${ string }`]: string | number
  }
}

export { };