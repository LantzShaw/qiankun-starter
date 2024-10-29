import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { registerMicroApps, start } from 'qiankun'

import App from './App.tsx'
import { apps, lifecycles } from './qiankun.ts'

const container = document.getElementById('root')!

const root = createRoot(container)

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)

registerMicroApps(apps, lifecycles)
start()
