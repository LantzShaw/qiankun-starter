// if (window.__POWERED_BY_QIANKUN__) {
//   // 动态设置 publicPath
//   __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
// }

// main.ts
// 仅在微前端环境中设置动态 publicPath
if (window.__POWERED_BY_QIANKUN__) {
  // @ts-ignore
  // 动态设置 Vite 的 public path
  __vite_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
