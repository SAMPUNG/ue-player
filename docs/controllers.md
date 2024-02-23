UE Controllers 插件提供各类 Controller，其中封装了最常使用的 UE 交互指令。

- 每个 Controller 都是一个指令集，包含若干操作指令
- 每个指令都返回一个 Promise，用于异步编程
- 对于不想使用 Promise 的开发者，每个指令最后一个参数均为回调函数

**只执行指令**

```ts
import { SystemController } from '@jugar/ue-player'

SystemController.restartLevel()
```

**异步编程**

```ts
import { SystemController } from '@jugar/ue-player'

await SystemController.restartLevel()
console.log('Level Restarted!')
```

**Promise**

```ts
import { SystemController } from '@jugar/ue-player'

SystemController.restartLevel().then((res) => {
  console.log(res)
})
```

# Actor Controller

**Methods**

| 方法名 | 参数 | 说明                  |
| ------ | ---- | --------------------- |
| hide   | Tag  | 隐藏指定 Tag 的 Actor |
| show   | Tag  | 显示指定 Tag 的 Actor |

**Usage**

```ts
import { ActorController } from '@jugar/ue-player'

ActorController.hide('hidden')
ActorController.show('vivible')
```

# Gis Controller

**Methods**

| 方法名                | 参数          | 说明                             |
| --------------------- | ------------- | -------------------------------- |
| addArcgisLayer        | ArcgisLayer   | 添加 ArcGIS WMTS 服务            |
| addCustomLayer        | CustomLayer   | 添加 自发布 WMTS 服务            |
| addMapboxLayer        | MapboxLayer   | 添加 Mapbox WMTS 服务            |
| addTiandituLayer      | TiandituLayer | 添加 天地图 WMTS 服务           |
| config                | GeoReference  | 配置 GeoReferencingSystem       |
| hideLayer             | ID            | 匹配 ID 隐藏 WMTS 图层          |
| hideLayerGroup        | GroupID       | 匹配 Group ID 隐藏一组 WMTS 图层 |
| removeLayer           | ID            | 匹配 ID 删除 WMTS 图层          |
| removeLayerGroup      | GroupID       | 匹配 Group ID 删除一组 WMTS 图层 |
| setCesiumTerrainLayer | ion           | 设置地形服务源为 Cesium 在线地形 |
| setCustomLayer        | CustomLayer   | 更改图层参数                     |
| setHeaders            | ID, Headers   | 更改图层请求头                   |
| setLayerIndex         | ID, Index     | 更改图层的 z-index               |
| setTerrainLayer       | url           | 通过 url 设置地形服务源          |
| showLayer             | ID            | 匹配 ID 显示 WMTS 图层          |
| showLayerGroup        | GroupID       | 匹配 Group ID 显示一组 WMTS 图层 |
| toggleDebug           | ID, Visible   | 控制图层调试信息显隐             |

**补充说明**

- *添加图层之前，必须先设置地形*
- Layer 参数对照：

| Property        | Description      | Layer | ArcGIS | Mapbox | 天地图 |
| --------------- | :--------------- | :---: | :----: | :----: | :----: |
| Format          | WMTS 请求参数   |  ✔  |   -   |   -   |   -   |
| GroupID         | 图层分组 ID      |  ✔  |   ✔   |   ✔   |   ✔   |
| ID              | 图层 ID          |  ✔  |   ✔   |   ✔   |   ✔   |
| Index           | 图层 z-index     |  ✔  |   ✔   |   ✔   |   ✔   |
| Layer           | WMTS 请求参数   |  ✔  |   -   |   -   |   -   |
| RequestHeaders  | WMTS 服务请求头 |  ✔  |   ✔   |   ✔   |   ✔   |
| Subdomains      | 子域名集合       |  ✔  |   -   |   -   |   -   |
| Style           | WMTS 请求参数   |  ✔  |   -   |   -   |   -   |
| TileMatrixSetID | WMTS 请求参数   |  ✔  |   -   |   -   |   -   |
| Toekn           | 地图服务 Token  |   -   |   ✔   |   ✔   |   -   |
| Type            | 枚举值           |   -   |   ✔   |   ✔   |   ✔   |
| Url             | WMTS 服务 url   |  ✔  |   -   |   -   |   -   |

- GeoReference 参数说明：

| Property                       | Description          | Type       | Default Value |
| ------------------------------ | -------------------- | ---------- | ------------- |
| GeographicEPSG                 | 空间坐标系 ESPG 编号 | string     | '4326'        |
| IsBigScene                     | 是否为大场景         | boolean    | false         |
| IsOriginLocationInProjectedCRS | 是否使用投影坐标系   | boolean    | -             |
| OriginCenter                   | 中心点坐标           | Coordinate | -             |
| ProjectedEPSG                  | 投影坐标系 ESPG 编号 | string     | '4549'        |

- IsBigScene为 true 时地球曲率会影响计算
- 使用投影坐标系时 OriginCenter 的值为投影坐标 [x, y, z]
- 使用空间坐标系时 OriginCenter 的值为投影坐标 [longitude, latitude, altitude]

**Usage**

```ts
import { GisController } from '@jugar/ue-player'
import type {
  ArcgisLayer,
  CustomLayer,
  GeoReference,
  MapboxLayer,
  TiandituLayer,
} from '@jugar/ue-player'

const reference: GeoReference = {
  IsOriginLocationInProjectedCRS: true,
  OriginCenter: [116, 39, 100],
}
GisController.config(reference)

const ID = 'uid-a1b2c3d4e5f6'
const GroupID = 'guid-a1b2c3d4e5f6'
const RequestHeaders = {}
const arcgisLayer: ArcgisLayer = {
  GroupID,
  ID,
  Index: 0,
  RequestHeaders,
  Type: 0,
}
const mapboxLayer: MapboxLayer = {
  GroupID,
  ID,
  Index: 0,
  RequestHeaders,
  Token: '',
  Type: 0,
}
const tiandituLayer: TiandituLayer = {
  GroupID,
  ID,
  Index: 0,
  RequestHeaders,
  Token: '',
  Type: 0,
}
const wmtsLayer: CustomLayer = {
  Format: '',
  GroupID,
  ID,
  Index: 0,
  Layer: '',
  RequestHeaders,
  Subdomains: [],
  Style: 'image/jpeg',
  TileMatrixSetID: '',
  Url: 'default',
}

GisController.addArcgisLayer(arcgisLayer)
GisController.addCustomLayer(wmtsLayer)
GisController.addMapboxLayer(mapboxLayer)
GisController.addTiandituLayer(tiandituLayer)

GisController.hideLayer(ID)
GisController.hideLayerGroup(GroupID)

GisController.removeLayer(ID)
GisController.removeLayerGroup(GroupID)

GisController.setCesiumTerrainLayer(1)
GisController.setCustomLayer(wmtsLayer)
GisController.setHeaders(ID, RequestHeaders)
GisController.setLayerIndex(ID, 1)
GisController.setTerrainLayer('')

GisController.showLayer(ID)
GisController.showLayerGroup(GroupID)

GisController.toggleDebug(ID, true)
```

# Level Controller

**Methods**

| 方法名             | 参数                                                                      | 说明         |
| ------------------ | ------------------------------------------------------------------------- | ------------ |
| openLevel          | mainLevelName, streamLevelNames                                           | 打开指定关卡 |
| restartLevel       |                                                                           | 重启关卡     |
| loadStreamLevels   | levelNames,unloadOtherStreamLevels,makeVisibleAfterLoad,shouldBlockOnLoad | 加载流关卡   |
| unloadStreamLevels | levelNames,shouldBlockOnLoad                                              | 卸载流关卡   |

**Usage**

```ts
import { LevelController } from '@jugar/ue-player'

LevelController.openLevel('Level1_Main', ['Level1_Base'])
LevelController.restartLevel()
LevelController.loadStreamLevel(['Level1_Base'])
LevelController.unloadStreamLevel(['Level1_Base'])
```

# Feature Controllers

**Interface**

```ts
interface Selector {
  ID?: string
  Name?: string
  Operator?: 'AND' | 'OR'
  Conditions?: Condition[]
}
```

**补充说明**

- 用于选中/显隐控制/删除 Point/Polygon/Polyline/Polymesh 的数据集合
- 查找条件可以为'Name'、'ID'、'Tags'中的一种或多种
- 传入 ID 或 Name 可以直接匹配
- 传入 Conditions 和 Operator 可以从 Tags 中匹配
- Operator: 'And'、'Or'，默认值为 'And'
- Condition: [key, operation, values]
- 逻辑运算符: '=='、'!='、'in'、'not in'
- 数学选择器: '>'、'>='、'<'、'<='
- 例1: { Operator:'And', Conditions: [['年龄','>=',[18]],['血型','in',['A','B']]] }
- 例2: { ID: 'pt-marker01-01', Name: 'Marker 01' }

## Point Controller

**Methods**

| 方法名         | 参数        | 说明                        |
| -------------- | ----------- | --------------------------- |
| checkExistance | Selector[]  | 检查指定的 Point 是否已存在 |
| create         | PointData[] | 生成 Point                  |
| hide           | Selector[]  | 隐藏指定的 Point            |
| pick           | Selector    | 唯一选中指定的 Point        |
| remove         | Selector[]  | 删除指定的 Points           |
| show           | Selector[]  | 显示指定的 Point            |
| unpick         | -           | 取消选择的 Point            |

**补充说明**

- create 时 Params 参数必须设置，Params 决定点位的样式；
- create 执行完，找不到点位，可以使用 pick({ ID: 'xxx' }) 选中该点位，视角会聚焦到点位上。

**Usage**

```ts
import { PointController } from '@jugar/ue-player'

// PointData 参见 Features
const points = [...]

PointController.checkExistance([{ ID: 'A1B2C3D4E5F6' }])
PointController.create(points)
PointController.hide([{ ID: 'A1B2C3D4E5F6' }])
PointController.pick({ ID: 'A1B2C3D4E5F6' })
PointController.remove({ Tag: ['第一批'] })
PointController.show([{ ID: 'A1B2C3D4E5F6' }])
PointController.unpick()
```

## Polygon Controller

**Methods**

| 方法名         | 参数          | 说明                          |
| -------------- | ------------- | ----------------------------- |
| checkExistance | Selector[]    | 检查指定的 Polygon 是否已存在 |
| create         | PolygonData[] | 生成  Polygon                |
| hide           | Selector[]    | 隐藏指定的  Polygon          |
| pick           | Selector      | 唯一选中指定的 Polygon        |
| remove         | Selector[]    | 删除指定的  Polygon          |
| show           | Selector[]    | 显示指定的  Polygon          |
| unpick         | -             | 取消选择的  Polygon          |

**Usage**

```ts
import { PolygonController } from '@jugar/ue-player'

// PolygonData 参见 Features
const polygons = [...]

PolygonController.checkExistance([{ ID: 'A1B2C3D4E5F6' }])
PolygonController.create(polygons)
PolygonController.hide([{ ID: 'A1B2C3D4E5F6' }])
PolygonController.pick({ ID: 'A1B2C3D4E5F6' })
PolygonController.remove({ Tag: ['第一批'] })
PolygonController.show([{ ID: 'A1B2C3D4E5F6' }])
PolygonController.unpick()
```

## Polyline Controller

**Methods**

| 方法名                     | 参数                          | 说明                             |
| -------------------------- | ----------------------------- | -------------------------------- |
| checkExistance             | Selector[]                    | 检查指定的 Polyline 是否已存在   |
| create                     | PolylineData[]                | 生成  Polylines                 |
| hide                       | Selector[]                    | 隐藏指定的  Polyline            |
| hideWithAnimateAndDuration | Selector[], Animate, Duration | 同上，指定显示动画和动画持续时间 |
| hideWithAnimateAndSpeed    | Selector[], Animate, Speed    | 同上，指定隐藏动画和动画速度     |
| pick                       | Selector                      | 唯一选中指定的 Polyline          |
| remove                     | Selector[]                    | 删除指定的 Points                |
| show                       | Selector[]                    | 显示指定的  Polyline            |
| showWithAnimateAndDuration | Selector[], Animate, Duration | 同上，指定显示动画和动画持续时间 |
| showWithAnimateAndSpeed    | Selector[], Animate, Speed    | 同上，指定显示动画和动画速度     |
| unpick                     | -                             | 取消选择的  Polyline            |

**补充说明**

- Animation 几种类型的使用：

| Key          | Create | Hide | Show |
| ------------ | :----: | :--: | :--: |
| EndToStart   |   ✔   |  ✔  |  ✔  |
| Immediately  |   ✔   |  ✔  |  ✔  |
| MiddleToSide |   ✔   |  -  |  ✔  |
| StartToEnd   |   ✔   |  ✔  |  ✔  |
| SideToMiddle |   -   |  ✔  |  -  |

**Usage**

```ts
import { PolylineController } from '@jugar/ue-player'

// PolylineData 参见 Features
const polylines = [...]

PolylineController.checkExistance([{ ID: 'A1B2C3D4E5F6' }])
PolylineController.create(polylines)
PolylineController.hide([{ ID: 'A1B2C3D4E5F6' }])
PolylineController.hideWithAnimateAndDuration([{ ID: 'A1B2C3D4E5F6' }], 'StartToEnd', 1)
PolylineController.hideWithAnimateAndSpeed([{ ID: 'A1B2C3D4E5F6' }], 'StartToEnd', 5)
PolylineController.pick({ ID: 'A1B2C3D4E5F6' })
PolylineController.remove({ Tag: ['第一批'] })
PolylineController.show([{ ID: 'A1B2C3D4E5F6' }])
PolylineController.showWithAnimateAndDuration([{ ID: 'A1B2C3D4E5F6' }], 'StartToEnd', 1)
PolylineController.showWithAnimateAndSpeed([{ ID: 'A1B2C3D4E5F6' }], 'StartToEnd', 5)
PolylineController.unpick()
```

## Polymesh Controller

**Methods**

| 方法名 | 参数           | 说明                              |
| ------ | -------------- | --------------------------------- |
| create | PolymeshData[] | 生成  Polymesh                   |
| hide   | Selector[]     | 隐藏指定的  Polymesh             |
| pick   | Selector       | 选择指定的 Polymesh，只能选中一个 |
| remove | Selector[]     | 删除指定的  Polymesh             |
| show   | Selector[]     | 显示指定的  Polymesh             |
| unpick | -              | 取消选择的  Polymesh             |

**Usage**

```ts
import { PolymeshController } from '@jugar/ue-player'

// PolymeshData 参见 Features
const polygmeshes = [...]

PolymeshController.create(polygmeshes)
PolymeshController.hide([{ ID: 'A1B2C3D4E5F6' }])
PolymeshController.pick({ ID: 'A1B2C3D4E5F6' })
PolymeshController.remove({ Tag: ['第一批'] })
PolymeshController.show([{ ID: 'A1B2C3D4E5F6' }])
PolymeshController.unpick()
```

# Sequence Controller

**Methods**

| 方法名 | 必要参数     | 数据类型 | 说明     |
| ------ | ------------ | -------- | -------- |
| pause  | IsLockCamera | boolean  | 暂停     |
| play   | SequenceName | string   | 播放     |
| stop   | -            | -        | 停止播放 |

**补充说明**

- IsLockCamera 为 boolean 值，是否锁定相机。

**Usage**

```ts
import { SequenceController } from '@jugar/ue-player'

SequenceController.pause(true)
SequenceController.play('Intro')
SequenceController.stop()
```

# System Controller

**Methods**

| 方法名    | 必要参数 | 说明                     |
| --------- | -------- | ------------------------ |
| mute      | -        | 关闭声音                 |
| setVolume | Volume   | 设置音量大小, [0.0,1.0] |
| unmute    | -        | 打开声音                 |

**Usage**

```ts
import { SystemController } from '@jugar/ue-player'

SystemController.mute()
SystemController.setVolume(0.3)
SystemController.unmute()
```

# Time Controller

**Methods**

| 方法名          | 参数     | 说明         |
| --------------- | -------- | ------------ |
| disableRealtime | -        | 禁用实时     |
| enableRealtime  | -        | 启用实时     |
| setDateTime     | DateTime | 设置场景时间 |

**补充说明**

- 禁用实时后，渲染场景中的时间不随服务器时间变化；
- 启用实时，渲染场景中的时间随服务器时间变化；
- 设置场景时间后，渲染场景将禁用实时效果，参数为 Date 对象。

**Usage**

```ts
import { TimeController } from '@jugar/ue-player'

const now = new Date('2020-10-24 12:34:56')
TimeController.disableRealtime()
TimeController.enableRealtime()
TimeController.setDateTime(now)
```

# View Controller

**Methods**

| 方法名     | 参数         | 说明           |
| ---------- | ------------ | -------------- |
| changeMode | ViewMode     | 改变视角模式   |
| flyTo      | ViewSettings | 飞到指定的位置 |
| getView    | -            | 获取当前视角   |
| resetView  | -            | 视角初始化     |

**补充说明**

- Distance 是相机到 Location 的距离，LockDistance 为 true 才生效；
- Location 的 x/y 不是经纬度，而是 UE 的世界坐标；
- Rotation 的三个值 roll/pitch/yaw 分别表示相机沿 *前后*、*左右*、*竖直* 轴旋转；
- Rotation 三个参数，以人的视角为例，分别对应 *向左/右歪头*、*抬头/低头*、*向左/右转头* 三种情况；
- 对于 Cesium 开发，yaw 对应 heading；
- LockRotation 飞行后是否锁定视角方向；
- LockDistance 飞行后是否锁定距离；
- Duration 为自然数，单位是 *秒*。

```ts
interface ViewSettings {
  Distance: number
  Duration: number
  Location: [x: number, y: number, z: number]
  LockRotation?: boolean
  LockDistance?: boolean
  Rotation: [roll: number, pitch: number, yaw: number]
}
enum ViewMode {
  SpringArm = 0, // 摇臂镜头视角
  GIS,           // GIS 系统视角
  Free,          // 自由视角
}
```

**Usage**

```ts
import { ViewController, ViewMode } from '@jugar/ue-player'
import type { ViewSettings } from '@jugar/ue-player'

const position: ViewSettings = {
  Distance: 182103.671875,
  Duration: 3,
  Location: [-150933.81522, -23069.396282, 25299.628117],
  LockDistance: false,
  LockRotation: false,
  Rotation: [0, -25.206932, -68.69767],
}
ViewController.changeMode(ViewMode.GIS)
ViewController.flyTo(position, 3).then((res) => {
  console.log(res)
})
ViewController.getView().then((desc) => {
  console.log(desc)
})
ViewController.resetView()
```

**补充说明**

- getView 方法返回一个 Promise，可用于异步编程 async/await
- getView 结果是一个对象，Data 字段内包含 Location/Rotation/Distance

# Weather Controller

**Methods**

| 方法名           | 参数               | 说明                 |
| ---------------- | ------------------ | -------------------- |
| changeByPreset   | Preset, Duration   | 根据预设变换天气效果 |
| changeBySettings | Settings, Duration | 根据参数变换天气效果 |

**补充说明**

- WeatherPreset 共有十种天气预设类型:

| Key           | Name |
| ------------- | ---- |
| Sunny         | 晴天 |
| Cloudy_Light  | 少云 |
| Cloudy_Medium | 多云 |
| Cloudy_Heavy  | 乌云 |
| Rainy_Light   | 小雨 |
| Rainy_Medium  | 中雨 |
| Rainy_Heavy   | 大雨 |
| Snowy_Light   | 小雪 |
| Snowy_Medium  | 中雪 |
| Snowy_Heavy   | 大雪 |

- WeatherSettings 参数均为可选，可自由组合。参数如下：

| Key              | Name             | Value   |
| ---------------- | ---------------- | ------- |
| CloudCoverage    | 天空中的云覆盖度 | (1, 10) |
| Dust             | 沙尘量           | (0, 10) |
| DustCoverage     | 场景沙尘覆盖度   | (0, 1)  |
| Fog              | 雾量             | (1, 10) |
| Rain             | 雨量             | (0, 10) |
| Snow             | 雪量             | (0, 10) |
| SnowCoverage     | 场景雪覆盖度     | (0, 1)  |
| ThunderLightning | 雷电强度         | (0, 10) |
| Wetness          | 场景湿润度       | (0, 1)  |
| WindIntensity    | 风强度           | (1, 10) |

**Usage**

```ts
import { WeatherController } from '@jugar/ue-player'
import type { WeatherPreset, WeatherSettings } from '@jugar/ue-player'

const preset: WeatherPreset = 'Sunny'
const settings: WeatherSettings = {
  CloudCoverage: 5, // 天空中的云覆盖度（1-10）
  Fog: 6,           // 雾量（1-10）
  WindIntensity: 3, // 风强度（1-10）
}
WeatherController.changeByPreset(preset, 3)
WeatherController.changeBySettings(settings, 3)
```
