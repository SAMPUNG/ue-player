import type { Coordinate, Offset, TagMap } from './common'
import type { FeatureParams } from './params'

export interface PolymeshData<S extends PolymeshStyle> {
  /**
   * [longitude, latitude, altitude][]
   *
   * 若未指定 altitude 值，则取默认值 0。
   *
   * 当未指定 altitude 值时，建议将参数 isHeightBasedSurface 设置为 true，并结合参数 offset 使用
   */
  Coordinates: Coordinate[]
  DrawBottom: boolean
  DrawSide: boolean
  DrawTop: boolean
  Height: number
  ID: string
  Name: string
  /** 其他参数 */
  Parameters: PolymeshParams[S]
  /** 'Custom' | 'Solid01' */
  Style: S
  Tag: TagMap
}

/** Polygon Parameters，不同 PolygonStyle 对应的补充参数接口 */
export interface PolymeshParams {
  Custom: Pick<FeatureParams, 'Style'>
  Solid01: Pick<FeatureParams, 'Color' | 'Emissive'>
}

export type PolymeshStyle = 'Custom' | 'Solid01'
