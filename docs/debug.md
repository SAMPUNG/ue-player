# 如何引入调试面板？

- 定义 <ue-player> 组件之前先初始化调试面版

```ts
import { defineContainer } from '~/utils/web-component'
import { useUI } from '~/utils/signaling'
import { createDebugUI } from '~/utils/debug-ui'

useUI(createDebugUI)

defineContainer((player) => {
  if (!player) {
    return
  }

  player.onstart = () => {
    console.log('Pixel Streaming Started!')
  }
})
```

# 如何打包调试程序？

- package.json 中已设置打包指令。

```cmd
npm run build:ue
```
