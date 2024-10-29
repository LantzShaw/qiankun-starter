declare global {
    interface Window {
      __POWERED_BY_QIANKUN__?: boolean
      __INJECTED_PUBLIC_PATH_BY_QIANKUN__?: string
    }
}

// 这是为了让这个文件被视为一个模块，从而避免 TypeScript 报告 "Cannot redeclare block-scoped variable" 的错误。
export {}