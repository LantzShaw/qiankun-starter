import { createApp, App as VueApp } from 'vue'
import { renderWithQiankun, qiankunWindow, QiankunProps } from 'vite-plugin-qiankun/dist/helper'

import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './router'
// import router from './router'

let app: VueApp

function render(props: QiankunProps) {
  const { container } = props

  const router = createRouter({
    // 主应用中设置的 activeRule
    history: createWebHistory(
      qiankunWindow.__POWERED_BY_QIANKUN__ ? '/react-app/app-sub' : '/sub'  // __POWERED_BY_QIANKUN__ 为 false 时的路由basename 需要不一样，例如：这里的basename 不能再为 '/app-sub'，否则页面首次访问正常，刷新页面则会出现空白
    ),
    routes,
  })

  app = createApp(App)
  app.use(router)
  app.mount(container ? container.querySelector('#app') : document.getElementById('app'))
}

renderWithQiankun({
  bootstrap() {
    console.log('bootstrap')
  },
  mount(props) {
    console.log('mount')
    render(props)
  },
  unmount(props: any) {
    console.log('unmount', props)
    app.unmount()
  },
  update(props: any) {
    console.log('vue3sub update')
    console.log(props)
  },
})

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({})
}
