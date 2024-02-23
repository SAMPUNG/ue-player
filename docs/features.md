UE Features 提供点、线、面三种要素的数据接口定义，及数据构造方法。

# Common Properties | 公共属性

| Key                    | Description                                        | Type    |
| ---------------------- | -------------------------------------------------- | ------- |
| Coordinate/Coordinates | 坐标数据                                           | Array   |
| ID                     | 唯一标识                                           | string  |
| IsHeightBasedSurface   | 指示 Feature 生成时，其高度是否基于场景上表面      | boolean |
| IsTraceSurface         | 指示 Polyline 生成时，两点之间的连线是否沿着于地表 | boolean |
| Name                   | 名称，非唯一标识                                   | string  |
| Offset                 | 基于坐标的偏移量（米）                             | Offset  |
| Params                 | 不同 Style 对应的参数不同                          | object  |
| Style                  | 不同要素 Style 不同                                | string  |
| Tag                    | 标签                                               | TagMap  |

## Coordinate/Coordinates

- Coordinate: [longitude: number, latitude: number, altitude?: number]
- Coordinates: [longitude: number, latitude: number, altitude?: number][]
- 若未指定 altitude 值(第三个参数)，则取默认值 0
- 当未指定 altitude 值时，建议将参数 isHeightBasedSurface 设置为 true，并结合参数 offset 使用经纬度坐标
- 设置 IsHeightBasedSurface 为真，点会贴地；同时设置 Offset 第三个参数是高度偏移，高于地面

## IsHeightBasedSurface

- 数据类型: boolean
- 指示 Feature 生成时，其高度是否基于场景上表面
- 若为 true，则高度为各点平面坐标处与场景上表面的交点加上 offset 参数的 z 值

## IsTraceSurface 说明:

- boolean
- *Poliline 专有属性*
- 指示 Polyline 生成时，两点之间的连线是否沿着于地表
- 若为 true，且 IsHeightBasedSurface 为 true，生成的线将以 offset 参数的 z 值高度紧贴地表
- 插值间隔在 params 参数中的 InterpolationDistance 设置，默认为 1 米

## Offset

- Offset: [x: number, y: number, z: number]
- 基于坐标的偏移量（米），其中 z 值代表绘制的平面所处高度

## Tag

- TagMap: Record<string, number, boolean>
- 以键值对的形式为Feature打上数据标签

# Params Properties | 补充参数属性

| Key                   | Description                                   | Value                      | Default  |
| :-------------------- | :-------------------------------------------- | :------------------------- | -------- |
| Angle                 | 条纹角度(度)                                  | [0, 360]                   | -        |
| Animate               | Polyline 创建后的显示动画                     | UE.Animate                | -        |
| AnimateSpeed          | 动画速度(米/秒)                               | (0, n)                     | -        |
| AnimateDuration       | 动画持续时间                                  | (0, n)                     | -        |
| CircleAmount          | 波纹个数                                      | [0, n)                     | -        |
| Color                 | 颜色                                          | string of RGBA            | -        |
| Color2                | 颜色                                          | string of RGBA            | -        |
| Curvature             | 曲率                                          | (0, n)                     | -        |
| Direction             | 指示 Polyline 是水平还是直立                  | UE.Direction              | -        |
| Duration              | 周期持续时间                                  | (0, n)                     | -        |
| DurationPerBounce     | 弹跳周期(秒)                                  | [0, n)                     | -        |
| Emissive              | 自发光强度                                    | (1, 100]                   | -        |
| FadeEndDistance       | 图片结束淡化/消失的距离(米)                   | [0, n)                     | -        |
| FadeStartDistance     | 图片开始淡化的距离(米)                        | (0, n)                     | -        |
| FlowSpeed             | 流动速度，为 0 时不动，负值时反方向流动       | (-n, n)                    | -        |
| FontSize              | 标签文字大小                                  | (0, n)                     | 24       |
| ImageArrow            | 箭头图标图片                                  | string of image            | -        |
| ImageArrowSize        | 箭头图标大小                                  | [sizeX, sizeY]             | [64, 64] |
| HeightPerBounce       | 弹跳高度(米)                                  | [0, n)                     | -        |
| ImageBackgroundColor  | 图标背景色                                    | string of RGBA            | -        |
| ImageHover            | 处于 Hover 状态时的图标                       | string of image            | -        |
| ImageHoverSize        | 处于 Hover 状态时的图标大小                   | [sizeX, sizeY]             | [64, 64] |
| ImageNormal           | 默认图标                                      | string of image            | -        |
| ImageNormalSize       | 图标默认大小                                  | [sizeX, sizeY]             | [64, 64] |
| InterpolationDistance | 浮于表面生成时的插值计算距离(米)              | (0, n)                     | -        |
| IsFixedLabelHeight    | 指示标签高度是否固定                          | boolean                    | false    |
| IsFixedLabelWidth     | 指示标签宽度是否固定                          | boolean                    | false    |
| IsLoop                | 是否首尾相连                                  | boolean                    | false    |
| LabelHeight           | 标签搞度，IsFixedLabelHeight 为 true 时才生效 | (0, n)                     | 120      |
| LabelMargin           | 标签外边距，顺时针顺序: 上 > 右 > 下 > 左     | [top, right, bottom, left] | -        |
| LabelWidth            | 标签宽度，IsFixedLabelWidth 为 true 时才生效  | (0, n)                     | 120      |
| Ratio                 | 虚实比例/条纹宽度缩放系数                     | (0, n)                     | -        |
| RotationPerSecond     | 每秒旋转度数(度)                              | [0, n)                     | -        |
| Scale                 | 长度/贴图/条纹宽度缩放系数                    | (0, n)                     | -        |
| Size                  | 直径大小(米)                                  | (0, n)                     | -        |
| Smoothness            | 平滑度，值越小 Polyline 越平滑，但性能越差    | (0, n)                     | 100      |
| Speed                 | 流动速度，为 0 时不动，负值时反方向流动      | (-n, n)                    | -        |
| TargetLength          | 点击 POI 点后摄像机到 POI 点的距离(米)        | (0, n)                     | -        |
| Width                 | 宽度(米)                                      | (0, n)                     | -        |

## 补充说明

- Animate 可选项: `EndToStart`、`Immediately`、`MiddleToSide`、`StartToEnd`
- Direction 可选项: `Horizontal`、`Vertical`
- Color 16进制 RGBA 值: '#FF0000FF'，*需要透明度*
- Color 标准 RGBA 值: 'rgba(255,0,0,0.5)'
- Image 资源字符串模式1: 图片 url，字符串必须以“http”开头
- Image 资源字符串模式2: 图片 base64 编码，字符串必须以“data:”开头
- Image 资源字符串模式3: 约定好的虚幻引擎图片资源名称
- Image 属性未设置，图标则为默认样式

# Point | 点

Point 共有六种类型：`Custom`、`Label01`、`Label02`、`Label03`、`Marker01`、`Marker02`。

- Point Data 构造方法，Javascropt 示例：

```js
import { PointData } from '@jugar/ue-player'

const point = new PointData(
  'Custom',  // Style
  [0, 0],    // Coordinates
  false,     // IsHeightBasedSurface
  [0, 0, 0], // Offset
  'id-123',  // ID
  'my-name', // Name
  'my-tag',  // Tag
  params,    // 更多参数
)
```

- Point Data 构造方法，Typescropt 示例：

```ts
const point: UE.PointData<'Custom'> = {
  Coordinates: [0, 0],
  IsHeightBasedSurface: false,
  ID: 'id-123',
  Name: 'my-name',
  Offset: [0, 0, 0],
  Params: params,
  Style: 'Custom',
  Tag: 'my-tag',
}
```

## Params Properties | 各类型 Point 支持的参数

| Property\Style       | Custom | Icon01 | Label01 | Label02 | Label03 | Marker01 | Marker02 |
| -------------------- | :----: | :----: | :-----: | :-----: | :-----: | :------: | :------: |
| CircleAmount         |   -   |   -   |    -    |    -    |    -    |    -    |    ✔    |
| Color                |   -   |   -   |    -    |    -    |    -    |    ✔    |    ✔    |
| Duration             |   -   |   -   |    -    |    -    |    -    |    -    |    ✔    |
| Emissive             |   -   |   -   |    -    |    -    |    -    |    ✔    |    ✔    |
| ImageArrow           |   -   |   -   |    -    |    -    |   ✔   |    -    |    -    |
| ImageArrowSize       |   -   |   -   |    -    |    -    |   ✔   |    -    |    -    |
| ImageBackgroundColor |   -   |   -   |   ✔   |    -    |    -    |    -    |    -    |
| ImageHover           |   -   |   ✔   |    -    |   ✔   |   ✔   |    -    |    -    |
| ImageHoverSize       |   -   |   ✔   |    -    |   ✔   |   ✔   |    -    |    -    |
| ImageNormal          |   -   |   ✔   |   ✔   |   ✔   |   ✔   |    -    |    -    |
| ImageNormalSize      |   -   |   ✔   |   ✔   |   ✔   |   ✔   |    -    |    -    |
| IsFixedLabelHeight   |   -   |   -   |    -    |    -    |   ✔   |    -    |    -    |
| IsFixedLabelWidth    |   -   |   -   |    -    |    -    |   ✔   |    -    |    -    |
| LabelHeight          |   -   |   -   |    -    |    -    |   ✔   |    -    |    -    |
| LabelMargin          |   -   |   -   |    -    |    -    |   ✔   |    -    |    -    |
| LabelWidth           |   -   |   -   |    -    |    -    |   ✔   |    -    |    -    |
| Size                 |   -   |   -   |    -    |    -    |    -    |    ✔    |    ✔    |
| Style                |   ✔   |   -   |    -    |    -    |    -    |    -    |    -    |
| TargetLength         |   ✔   |   ✔   |   ✔   |   ✔   |   ✔   |    ✔    |    ✔    |

## Params Demo | 参数示例

以下为各类型 Point 补充参数使用示例(Typescript)：

- Icon01 Params

```ts
const params: UE.PolygonData<'Icon01'> = {
  ImageHover: 'data:image/png;base64,kAkEiMaGeBaSe64',
  ImageHoverSize: [64, 64],
  ImageNormal: 'https://fake-image.top/figure.png',
  ImageNormalSize: [64, 64],
  TargetLength: 1000,
}
```

- Label01 Params

```ts
const params: UE.PolygonData<'Label01'> = {
  ImageBackgroundColor: '#FF0000FF',
  ImageNormal: 'https://fake-image.top/figure.png',
  ImageNormalSize: [64, 64],
  TargetLength: 1000,
}
```

- Label02 Params

```ts
const params: UE.PolygonData<'Label02'> = {
  ImageHover: 'data:image/png;base64,kAkEiMaGeBaSe64',
  ImageHoverSize: [64, 64],
  ImageNormal: 'https://fake-image.top/figure.png',
  ImageNormalSize: [64, 64],
  TargetLength: 1000,
}
```

- Label03 Params

```ts
const params: UE.PolygonData<'Label03'> = {
  ImageArrow: 'data:image/png;base64,kAkEiMaGeBaSe64',
  ImageArrowSize: [64, 64],
  ImageHover: 'data:image/png;base64,kAkEiMaGeBaSe64',
  ImageHoverSize: [64, 64],
  ImageNormal: 'https://fake-image.top/figure.png',
  ImageNormalSize: [64, 64],
  IsFixedLabelHeight: false,
  IsFixedLabelWidth: false,
  LabelHeight: 64,
  LabelMargin: [4, 8, 4, 8],
  LabelWidth: 64,
  TargetLength: 1000,
}
```

- Marker01 Params

```ts
const params: UE.PolygonData<'Marker01'> = {
  Color: '#FF0000FF',
  Emissive: 50,
  Size: 50,
  TargetLength: 100,
}
```

- Marker02 Params

```ts
const params: UE.PolygonData<'Marker02'> = {
  CircleAmount: 10,
  Color: '#FF0000FF',
  Duration: 10,
  Emissive: 50,
  Size: 50,
  TargetLength: 100,
}
```

- Custom 定制化弹窗

```js
const params = {
  /** Required: 弹窗宽高 */
  PopupSize: [100, 100],
  /** Required: 弹窗标题内容 */
  Text: '',
  /** Required: 要显示的html网页地址 */
  Url: '',
  /** Required: 弹窗未打开时的点位图标 */
  NormalImageStyle: {
    Size: [20, 20],
    /** [ left, top, right, bottom ] */
    Margin: [20, 20, 20, 20],
    /** 图片地址，不是Url地址，引擎里面的图片地址 */
    Image: '',
  },
  /** Optional: 点位被鼠标悬浮时的图标 */
  HoveredImageStyle: {
    Size: [20, 20],
    /** [ left, top, right, bottom ] */
    Margin: [20, 20, 20, 20],
    /** 图片地址，不是Url地址，引擎里面的图片地址 */
    Image: '',
  },
  /** Optional: 点位选中时的图标 */
  PressedImageStyle: {
    Size: [20, 20],
    /** [ left, top, right, bottom ] */
    Margin: [20, 20, 20, 20],
    /** 图片地址，不是Url地址，引擎里面的图片地址 */
    Image: '',
  },
}
```

# Polyline | 线

Polyline 共有七种类型：`Arrow01`、`Custom`、`Dash01`、`Gradient01`、`OD01`、`OD02`、`Solid01`。

- Polyline Data 构造方法，Javascropt 示例：

```js
import { PolylineData } from '@jugar/ue-player'

const polyline = new PolylineData(
  'Custom',                 // Style
  [[0, 0], [0, 1], [1, 1]], // Coordinates
  false,                    // IsHeightBasedSurface
  false,                    // IsTraceSurface
  [0, 0, 0],                // Offset
  'id-123',                 // ID
  'my-name',                // Name
  'my-tag',                 // Tag
  params,                   // 更多参数
)
```

- Polyline Data 构造方法，Typescropt 示例：

```ts
const polyline: UE.PolylineData<'Custom'> = {
  Coordinates: [[0, 0], [0, 1], [1, 1]],
  IsHeightBasedSurface: false,
  IsTraceSurface: false,
  ID: 'id-123',
  Name: 'my-name',
  Offset: [0, 0, 0],
  Params: params,
  Style: 'Custom',
  Tag: 'my-tag',
}
```

## Params Properties | 各类型 Point 支持的参数

| Property\Style  | Arrow01 | Custom | Dash01 | Gradient01 | OD01 | OD02 | Solid01 |
| --------------- | :-----: | :----: | :----: | :--------: | :--: | :--: | :-----: |
| Animate         |   ✔   |   -   |   ✔   |     ✔     |  ✔  |  ✔  |   ✔   |
| AnimateSpeed    |   ✔   |   -   |   ✔   |     ✔     |  ✔  |  ✔  |   ✔   |
| AnimateDuration |   ✔   |   -   |   ✔   |     ✔     |  ✔  |  ✔  |   ✔   |
| Color           |   ✔   |   -   |   ✔   |     ✔     |  ✔  |  ✔  |   ✔   |
| Color2          |    -    |   -   |   ✔   |     -     |  ✔  |  -  |    -    |
| Direction       |    -    |   -   |   -   |     ✔     |  -  |  -  |    -    |
| FlowSpeed       |   ✔   |   -   |   ✔   |     -     |  -  |  -  |    -    |
| IsLoop          |   ✔   |   -   |   ✔   |     ✔     |  -  |  -  |   ✔   |
| Ratio           |    -    |   -   |   ✔   |     -     |  -  |  -  |    -    |
| Scale           |    -    |   -   |   ✔   |     -     |  -  |  -  |    -    |
| Smoothness      |   ✔   |   -   |   ✔   |     ✔     |  -  |  -  |   ✔   |
| Style           |    -    |   ✔   |   -   |     -     |  -  |  -  |    -    |
| Width           |   ✔   |   -   |   ✔   |     ✔     |  -  |  -  |   ✔   |

补充说明：

- Animate 可选项: `EndToStart`、`Immediately`、`MiddleToSide`、`StartToEnd`
- Direction 可选项: `Horizontal`、`Vertical`

## Params Demo | 参数示例

以下为各类型 Point 补充参数使用示例(Typescript)：

- Arrow01 Params

```ts
const params: UE.PolygonData<'Arrow01'> = {
  Animate: 'StartToEnd',
  AnimateSpeed: 1500,
  AnimateDuration: 3,
  Color: '#FF0000FF',
  FlowSpeed: 10,
  IsLoop: false,
  Smoothness: 100,
  Width: 3,
}
```

## Dash01 Params

```ts
const params: UE.PolygonData<'Dash01'> = {
  Animate: 'StartToEnd',
  AnimateSpeed: 1500,
  AnimateDuration: 3,
  Color: '#FF0000FF',
  Color2: '#00FF00FF',
  FlowSpeed: 10,
  IsLoop: false,
  Ratio: 10,
  Scale: 10,
  Smoothness: 100,
  Width: 3,
}
```

## Gradient01 Params

```ts
const params: UE.PolygonData<'Gradient01'> = {
  Animate: 'StartToEnd',
  AnimateSpeed: 1500,
  AnimateDuration: 3,
  Color: '#FF0000FF',
  Direction: 'Horizontal',
  IsLoop: false,
  Smoothness: 100,
  Width: 3,
}
```

## OD01 Params

```ts
const params: UE.PolygonData<'OD01'> = {
  Animate: 'StartToEnd',
  AnimateSpeed: 1500,
  AnimateDuration: 3,
  Color: '#FF0000FF',
  Color2: '#00FF00FF',
}
```

- OD02 Params

```ts
const params: UE.PolygonData<'OD02'> = {
  Animate: 'StartToEnd',
  AnimateSpeed: 1500,
  AnimateDuration: 3,
  Color: '#FF0000FF',
}
```

## Solid01 Params

```ts
const params: UE.PolygonData<'Solid01'> = {
  Animate: 'StartToEnd',
  AnimateSpeed: 1500,
  AnimateDuration: 3,
  Color: '#FF0000FF',
  IsLoop: false,
  Smoothness: 100,
  Width: 3,
}
```

# Polygon | 面

Polygon 共有三种类型：`Custom`、`Solid01`、`Stripe01`。

- Polygon Data 构造方法，Javascropt 示例：

```ts
import { PolygonData } from '@jugar/ue-player'

const polygon = new PolygonData(
  'Custom',                         // Style
  [[0, 0], [0, 1], [1, 1], [0, 0]], // Coordinates
  false,                            // IsHeightBasedSurface
  [0, 0, 0],                        // Offset
  'id-123',                         // ID
  'my-name',                        // Name
  'my-tag',                         // Tag
  params,                           // 更多参数
)
```

- Polygon Data 构造方法，Typescropt 示例：

```ts
const polygon: UE.PolygonData<'Custom'> = {
  Coordinates: [[0, 0], [0, 1], [1, 1], [0, 0]],
  IsHeightBasedSurface: false,
  ID: 'id-123',
  Name: 'my-name',
  Offset: [0, 0, 0],
  Params: params,
  Style: 'Custom',
  Tag: 'my-tag',
}
```

## Params Properties | 各类型 Point 支持的参数

| Property\Style | Custom | Solid01 | Stripe01 |
| -------------- | :----: | :-----: | :------: |
| Angle          |   -   |    -    |    ✔    |
| Color          |   -   |   ✔   |    ✔    |
| Color2         |   -   |    -    |    ✔    |
| Emissive       |   -   |   ✔   |    ✔    |
| Ratio          |   -   |    -    |    ✔    |
| Scale          |   -   |    -    |    ✔    |
| Speed          |   -   |    -    |    ✔    |
| Style          |   ✔   |    -    |    -    |

## Params Demo | 参数示例

以下为各类型 Point 补充参数使用示例(Typescript)：

- Solid01 Params

```ts
const params: UE.PolygonData<'Solid01'> = {
  Color: '#FF0000FF',
  Emissive: 50,
}
```

- Stripe01 Params

```ts
const params: UE.PolygonData<'Stripe01'> = {
  Angle: 45,
  Color: '#FF0000FF',
  Color2: '#00FF00FF',
  Emissive: 50,
  Ratio: 1,
  Scale: 1,
  Speed: 1,
}
```
