import type { Coordinate } from '../features/common'
import type { UIDescriptor } from '../utils/command'

/** ArcGis WMTS 服务 */
export interface ArcgisLayer {
  GroupID: String
  ID: String
  Index: Number
  RequestHeaders: Object
  /** 枚举值
   * - 0: WorldImagery
   * - 1: WorldStreetMap
   */
  Type: Number
}

/** WMTS 服务 */
export interface CustomLayer {
  /**
   * 天地图风格的Url可能需要（一般也不需要）
   * xyz风格一定不需要
   * - 可选
   * - 默认值: "image/jpeg"
   */
  Format: String
  /**
   * 图层分组 ID
   * - 用于分组控制显隐、删除
   * - 可选
   */
  GroupID: String
  /**
   * 图层 ID
   * - 唯一值 */
  ID: String
  /**
   * 图层 z-index
   * - 最小值为 0
   * - 可选
   */
  Index: Number
  /**
   * 天地图风格的Url可能需要（一般也不需要）
   * xyz风格一定不需要
   * - 可选
   * - 默认值: ""
   */
  Layer: String
  /**
   * 请求wmts服务时的请求头
   * 有些地图服务器会判断请求是不是从浏览器端发出来的
   * 这个时候就需要指定请求头
   * - 可选
   */
  RequestHeaders: Object
  /**
   * 天地图风格的Url可能需要（一般也不需要）
   * xyz风格一定不需要
   * - 可选
   * - 默认值: "default"
   */
  Style: String
  /**
   * 子域名集合
   * 如果要使用这个选项，url中必须带"{s}"
   * 比如天地图的: "http://t{s}.tianditu.gov.cn/vec_c/wmts?tk="
   * 这里的"{s}"在请求瓦片时会随机被替换为子域名中的某个值，以减小地图瓦片服务器的压力
   * - 可选
   */
  Subdomains: Array<String>
  /**
   * 天地图风格的Url可能需要（一般也不需要）
   * xyz风格一定不需要
   * - 可选
   * - 默认值: ""
   */
  TileMatrixSetID: String
  /**
   * 两种风格的url
   * 一种是天地图那种
   * 一种是带xyz的(http://ip:port/{z}/{x}/{y}.format，format必须带上(jpg/png等等))
   * 详见我上周写的文档
   */
  Url: String
}

/** GIS 坐标参考配置 */
export interface GeoReference {
  /**
   * 空间坐标系 ESPG 编号
   * - 默认值: 4326
   */
  GeographicEPSG?: string
  /**
   * 是否为大场景
   * - true: 地球曲率会影响计算
   * - 默认值: false
   */
  IsBigScene?: boolean
  /**
   * 是否使用投影坐标系
   * - true: OriginCenter 的值为投影坐标 [x, y, z]
   * - false: OriginCenter 的值为投影坐标 [longitude, latitude, altitude]
   */
  IsOriginLocationInProjectedCRS: boolean
  /** 中心点坐标 */
  OriginCenter: Coordinate
  /**
   * 投影坐标系 ESPG 编号
   * - 默认值: 4549
   */
  ProjectedEPSG?: string
}

/** 用于控制 GeoReferencingSystem 的属性值的配置 */
export interface GisController {
  /** 添加 ArcGIS WMTS 服务 */
  addArcgisLayer(Layer: ArcgisLayer): Promise<UIDescriptor>

  /** 添加 自发布 WMTS 服务 */
  addCustomLayer(Layer: CustomLayer): Promise<UIDescriptor>

  /** 添加 Mapbox WMTS 服务 */
  addMapboxLayer(Layer: MapboxLayer): Promise<UIDescriptor>

  /** 添加 天地图 WMTS 服务 */
  addTiandituLayer(Layer: TiandituLayer): Promise<UIDescriptor>

  /** 配置 GeoReferencingSystem */
  config(geoReference: GeoReference): Promise<UIDescriptor>

  /** 匹配 ID 隐藏 WMTS 图层 */
  hideLayer(ID: string): Promise<UIDescriptor>

  /** 匹配 Group ID 隐藏一组 WMTS 图层 */
  hideLayerGroup(GroupID: string): Promise<UIDescriptor>

  /** 匹配 ID 删除 WMTS 图层 */
  removeLayer(ID: string): Promise<UIDescriptor>

  /** 匹配 Group ID 删除一组 WMTS 图层 */
  removeLayerGroup(GroupID: string): Promise<UIDescriptor>

  /** 设置地形服务源为 Cesium 在线地形 */
  setCesiumTerrainLayer(ion: number): Promise<UIDescriptor>

  /** 更改图层参数 */
  setCustomLayer(Layer: UE.CustomLayer): Promise<UIDescriptor>

  /** 更改图层请求头 */
  setHeaders(ID: string, Headers: Object): Promise<UIDescriptor>

  /** 更改图层的 z-index */
  setLayerIndex(ID: string, Index: number): Promise<UIDescriptor>

  /** 通过 url 设置地形服务源 */
  setTerrainLayer(url: string): Promise<UIDescriptor>

  /** 匹配 ID 显示 WMTS 图层 */
  showLayer(ID: string): Promise<UIDescriptor>

  /** 匹配 Group ID 显示一组 WMTS 图层 */
  showLayerGroup(GroupID: string): Promise<UIDescriptor>

  /**
   * 控制图层调试信息显隐
   * 主要用于加载wmts图层失败时
   * 在编辑器的控制台显示请求的响应信息
   * 看看响应状态码啥的
   */
  toggleDebug(ID: string, Visible: boolean): Promise<UIDescriptor>
}

export declare const GisController: GisController

/** Mapbox WMTS 服务 */
export interface MapboxLayer {
  GroupID: String
  ID: String
  Index: Number
  RequestHeaders: Object
  /** Mapbox Token */
  Token: String
  /** 枚举值
   * - 0: Satellite
   */
  Type: Number
}

/** 天地图 WMTS 服务 */
export interface TiandituLayer {
  GroupID: String
  ID: String
  Index: Number
  RequestHeaders: Object
  /** 天地图 Token */
  Token: String
  /**
   * 枚举值
   * - 0: vec_c
   * - 1: vec_w
   * - 2: cva_c
   * - 3: cva_w
   * - 4: eva_c
   * - 5: eva_w
   * - 6: img_c
   * - 7: img_w
   * - 8: cia_c
   * - 9: cia_w
   * - 10: eia_c
   * - 11: eia_w
   * - 12: ibo_c
   * - 13: ibo_w
   */
  Type: Number
}
