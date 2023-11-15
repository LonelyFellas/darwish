/**
 *
 * @param address URL地址
 * @returns boolean
 */
const isEmailValid = (address: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(address);
export default isEmailValid;
