import { version } from '../package.json';

export function add(a, b) {
  return a + b;
}

export function mul(a, b) {
  return a * b
}

export const pacVersion = `${version}+!1`;

export const arrowFn = () => {
  console.log('arrowFn');
}

