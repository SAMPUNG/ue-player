import type { Coordinate, Offset, TagMap } from './common'
import type { FeatureParams } from './params'

export interface PolygonData<S extends PolygonStyle> {
  /**
   * [longitude, latitude, altitude][]
   *
   * 若未指定 altitude 值，则取默认值 0。
   *
   * 当未指定 altitude 值时，建议将参数 isHeightBasedSurface 设置为 true，并结合参数 offset 使用
   */
  Coordinates: Coordinate[]
  /**
   * 指示 Polygon 生成时，其高度是否基于场景上表面
   *
   * 若为 true，则高度为各点平面坐标处与场景上表面的交点加上 offset 参数的 z 值
   */
  IsHeightBasedSurface: boolean
  ID: string
  Name: string
  /** [x, y, z] 基于坐标的偏移量（米），其中 z 值代表绘制的平面所处高度 */
  Offset: Offset
  /** 其他参数 */
  Parameters: PolygonParams[S]
  /** 'Custom' | 'Solid01' | 'Stripe01' */
  Style: S
  Tag: TagMap
}

/** Polygon Parameters，不同 PolygonStyle 对应的补充参数接口 */
export interface PolygonParams {
  Custom: Pick<FeatureParams, 'Style'>
  Solid01: Pick<FeatureParams, 'Color' | 'Emissive'>
  Stripe01: Pick<
    FeatureParams,
    'Angle' | 'Color' | 'Color2' | 'Emissive' | 'Ratio' | 'Scale' | 'Speed'
  >
}

export type PolygonStyle = 'Custom' | 'Solid01' | 'Stripe01'
