import type { Coordinate, Offset, TagMap } from './common'
import type { FeatureParams } from './params'

export interface PolylineData<S extends PolylineStyle> {
  /**
   * [longitude, latitude, altitude][]
   *
   * 若未指定 altitude 值，则取默认值 0。
   *
   * 当未指定 altitude 值时，建议将参数 isHeightBasedSurface 设置为 true，并结合参数 offset 使用
   */
  Coordinates: Coordinate[]
  /**
   * 指示 Feature 生成时，其高度是否基于场景上表面
   *
   * 若为 true，则高度为各点平面坐标处与场景上表面的交点加上 offset 参数的 z 值
   */
  IsHeightBasedSurface: boolean
  /**
   * 指示 Polyline 生成时，两点之间的连线是否沿着于地表
   *
   * 若为 true，且 IsHeightBasedSurface 为 true，生成的线将以 offset 参数的 z 值高度紧贴地表
   *
   * 插值间隔在 params 参数中的 InterpolationDistance 设置，默认为 1 米
   */
  IsTraceSurface: boolean
  ID: string
  Name: string
  /** [x, y, z] 基于坐标的偏移量（米），其中 z 值代表绘制的平面所处高度 */
  Offset: Offset
  /** 其他参数 */
  Parameters: PolylineParams[S]
  /** 'Arrow01' | 'Custom' | 'Dash01' | 'Gradient01' | 'OD01' | 'OD02' | 'Solid01' */
  Style: S
  Tag: TagMap
}

/** Polyline Parameters，不同 PolylineStyle 对应的补充参数接口 */
export interface PolylineParams {
  Arrow01: Pick<
    FeatureParams,
    | 'Animate'
    | 'AnimateDuration'
    | 'AnimateSpeed'
    | 'Color'
    | 'FlowSpeed'
    | 'IsLoop'
    | 'Smoothness'
    | 'Width'
  >
  Custom: Pick<FeatureParams, 'Style'>
  Dash01: Pick<
    FeatureParams,
    | 'Animate'
    | 'AnimateDuration'
    | 'AnimateSpeed'
    | 'Color'
    | 'Color2'
    | 'FlowSpeed'
    | 'IsLoop'
    | 'Ratio'
    | 'Scale'
    | 'Smoothness'
    | 'Width'
  >
  Gradient01: Pick<
    FeatureParams,
    | 'Animate'
    | 'AnimateDuration'
    | 'AnimateSpeed'
    | 'Color'
    | 'Color2'
    | 'FlowSpeed'
    | 'IsLoop'
    | 'Ratio'
    | 'Scale'
    | 'Smoothness'
    | 'Width'
  >
  OD01: Pick<
    FeatureParams,
    'Animate' | 'AnimateDuration' | 'AnimateSpeed' | 'Color' | 'Color2'
  >
  OD02: Pick<
    FeatureParams,
    'Animate' | 'AnimateDuration' | 'AnimateSpeed' | 'Color'
  >
  Solid01: Pick<
    FeatureParams,
    | 'Animate'
    | 'AnimateDuration'
    | 'AnimateSpeed'
    | 'Color'
    | 'IsLoop'
    | 'Smoothness'
    | 'Width'
  >
}

export type PolylineStyle =
  | 'Arrow01'
  | 'Custom'
  | 'Dash01'
  | 'Gradient01'
  | 'OD01'
  | 'OD02'
  | 'Solid01'
