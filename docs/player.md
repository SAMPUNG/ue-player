Player 是用于 UE5 像素流播放的插件。

# 安装

- npm

```cmd
npm install @jugar/ue-player@latest
```

- yarn

```cmd
yarn add @jugar/ue-player@latest
```

# 集成到 Web 页面

- *在 HTML 模板内使用之前，必须先引入！*
- *`<ue-player>` 的高度不能为 0！*
- 基于模板渲染设置事件回调函数时(以 Vue2 为例):

```html
<ue-player
  application-name="HdecUnrealHaining"
  url="http://localhost:1234"
  @error="onError"
  @start="onStart"
>
</ue-player>

<script type="module">
import { defineContainer } from '@jugar/ue-player'

defineContainer()

export default {
  methods: {
    onStart(evt) {
      console.warn('start ===> ', evt.detail)
    },
    onError(evt) {
      console.error('error ===> ', evt.message)
    },
  }
}
</script>
```

- 不基于前端框架的集成示例

```html
<!-- HTML Template -->
<ue-player
  application-name="HdecUnrealHaining"
  url="http://localhost:1234"
>
</ue-player>

<script type="module">
import { defineContainer } from '@jugar/ue-player'

defineContainer((player) => {
  player.addEventListener('start', (evt) => {
    console.warn('start ===> ', evt.detail)
  })
  player.addEventListener('error', (evt) => {
    console.error('error ===> ', evt.message)
  })
})
</script>
```

# 属性

```html
<ue-player
  aspect-ratio="auto"
  signaling-url="http://39.170.3.124:80/"
  volume="0.3"
>
</ue-player>
```

## application-name

- 必要属性
- UE 应用名称，联系 UE 研发人员确认
- 无默认值

## aspect-ratio

- 可选属性
- 云渲染视口纵横比例
- 设置 `aspect-ratio` 非 `auto` 时，`height` 和 `width` 比例应一致或不设置
- 示例: 'auto', '16 / 9', '4 / 3'
- 默认值: 'auto'
- 补充三种使用情况说明
- 1、不设置height、width、`aspect-ratio`
- 2、设置height、width，但不设置 `aspect-ratio`
- 3、不设置height、width，设置 `aspect-ratio`

## height

- 可选属性
- UE 渲染分辨率高度
- 无默认值

## match-maker-url

- 可选属性
- 云渲染源地址，协议://主机:端口/路径
- 无默认值

## signaling-url

- 可选属性
- 信令服务地址，协议://主机:端口/路径
- 无默认值

## volume

- 可选属性
- UE 音量
- 默认值: 0.3

## width

- 可选属性
- UE 渲染分辨率宽度
- 无默认值

# 事件

CvePlayer 扩展了 HTMLELment，有更多的事件回调。

| Event   | Description              |
| ------- | ------------------------ |
| command | Web 发送指令到 UE       |
| enter   | 鼠标悬浮在点、线、面之上 |
| error   | 云渲染异常               |
| leave   | 鼠标离开在点、线、面     |
| message | UE 传递消息到 Web       |
| pick    | 点、线、面被选中         |
| start   | 云渲染开始               |
| stop    | 云渲染结束               |

- 全局环境下，有且仅有一个 player 元素，请导入后使用；
- player 可能为空(尚未初始化)，请注意校验；

```ts
export class CvePlayer extends HTMLELment {
  oncommand?: (evt: CustomEvent<UIDescriptor>) => void
  onenter?: (evt: CustomEvent<UIDescriptor>) => void
  onerror?: (evt: ErrorEvent) => void
  onleave?: (evt: CustomEvent<UIDescriptor>) => void
  onmessage?: (evt: CustomEvent<UIDescriptor>) => void
  onpick?: (evt: CustomEvent<UIDescriptor>) => void
  onstart?: (evt: CustomEvent<number>) => void
  onstop?: (evt: CustomEvent<string>) => void
}
export let player: CvePlayer | undefined
```

# 云渲染控制

## connect2MatchMaker

```ts
import { connect2MatchMaker } from '@jugar/ue-player'
// 运行云渲染程序，使用绑定的源地址和应用名称
connect2MatchMaker()
```

## connect2Signaling

```ts
import { connect2Signaling } from '@jugar/ue-player'
// 输入像素流实例地址，重新渲染
connect2Signaling('http://localhost:8081')
```

## defineContainer

```ts
import { defineContainer } from '@jugar/ue-player'
// 云渲染插件初始化后，立即执行回调函数
defineContainer(async () => {
  if (!player) {
    return
  }

  player.onstart = () => {
    const reference: UE.GeoReference = {
      IsOriginLocationInProjectedCRS: true,
      OriginCenter: [116, 39, 100],
    }
    GisController.config(reference)
  }
})
```

## disconnect

```ts
import { disconnect } from '@jugar/ue-player'
// 停止渲染
disconnect()
```

## getPixelStreamingInstance

```ts
import { getPixelStreamingInstance } from '@jugar/ue-player'
// 获取云渲染实例
getPixelStreamingInstance(url)
  .then((signalingURL) => {
    player?.setAttribute('signaling-url', signalingURL)
  })
  .catch((message) => {
    emitErrorEvent(message)
  })
```

## setDegradationPreference

```ts
import { setDegradationPreference } from '@jugar/ue-player'
// 停止渲染设置云渲染实例流送质量偏好
// 'BALANCED' | 'MAINTAIN_FRAMERATE' | 'MAINTAIN_RESOLUTION'
setDegradationPreference('BALANCED')
```

## setResolution

```ts
import { setResolution } from '@jugar/ue-player'
// 设置云渲染实例分辨率
setResolution(1920, 1080)
```
