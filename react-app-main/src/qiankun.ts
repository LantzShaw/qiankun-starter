import { FrameworkLifeCycles, initGlobalState, LifeCycleFn, MicroAppStateActions, RegistrableApp } from "qiankun"

type AppProps = {
  name: string
  title: string
  actions: MicroAppStateActions
}

type GlobalState = {
    age: number
}

const initialState: GlobalState = {
  age: 18,
}

// NOTE: 初始化全局状态并指定类型
const actions: MicroAppStateActions = initGlobalState(initialState)

// NOTE: 监听全局状态的变化
actions.onGlobalStateChange((state, prev) => {
   console.log('Global state changed:', state)
   console.log('Previous state:', prev)
})

// NOTE: 修改全局状态
actions.setGlobalState({
  ...initialState,
  appStates: {
    'vue-sub-app': 'MOUNTED',
  },
});

const apps: Array<RegistrableApp<AppProps>> = [
  {
    name: 'app-sub',
    entry: '//localhost:7100',
    container: '#sub-app-container',
    activeRule: '/react-app/app-sub', // 主应用的 basename + router path (即需要嵌入到主应用的哪个路由下)
    loader(loading: boolean) {
      console.log('==========loading=========', loading)
    },
    props: {
      // 一次性访问
      name: 'Lantz',
      title: 'Vue App Sub',
      actions,
    },
  },
]

const beforeLoad: LifeCycleFn<AppProps> = async app => {
  console.log('before load app.name=====>', app.name)
}

const beforeMount: LifeCycleFn<AppProps> = async app => {
  console.log('before mount app.name=====>', app.name)
}

const afterMount: LifeCycleFn<AppProps> = async app => {
  console.log('after mount app.name=====>', app.name)
}

const afterUnmount: LifeCycleFn<AppProps> = async app => {
  console.log('after unmount app.name=====>', app.name)
}

const lifecycles: FrameworkLifeCycles<AppProps> = {
  beforeLoad,
  beforeMount,
  afterMount,
  afterUnmount,
}

export { apps, lifecycles }
