/**
 *
 * @returns 判断是否是浏览器环境
 */
const isBrowser = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

export default isBrowser;
