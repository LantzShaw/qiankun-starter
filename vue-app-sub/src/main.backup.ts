// import { createApp, App as VueApp } from 'vue'

// // import './public-path'
// import App from './App.vue'
// import router from './router'
// import { MicroAppStateActions } from 'qiankun'

// // import './style.css'

// // const app = createApp(App)
// // app.mount('#app')

// console.log('=======vue app======', window.__POWERED_BY_QIANKUN__)

// let instance: VueApp<Element> | null = null

// // 动态设置 publicPath
// if (window.__POWERED_BY_QIANKUN__) {
//   // @ts-ignore
//   __vite_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
// }


// function render(props: any = {}) {
//     console.log('========router=======', props)

//     const { container  } = props

//     instance = createApp(App)
//     instance.use(router)
//     instance.mount(container ? container.querySelector('#app'): '#app' )
// }

// if(!window.__POWERED_BY_QIANKUN__) {
//     render()
// }

// export async function bootstrap() {
//     console.log('Vue app bootstraped')
// }

// export async function mount(props: { actions: MicroAppStateActions }) {
//   console.log('props from main framework', props)

//   const { actions } = props

//   // NOTE: 监听全局状态变化
//   actions.onGlobalStateChange((state, prev) => {
//     console.log('main app state change', state, prev)
//   })

//   // NOTE: 修改全局状态
//   // actions.setGlobalState({
//   //     test: 'hello vue'
//   // })

//   render(props)
// }

// export async function unmount() {
//     console.log('Vue app unmounting')

//     if(instance) {
//       instance.unmount()
//       instance = null
//     }
// }