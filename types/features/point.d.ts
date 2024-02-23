import type { Coordinate, Offset, TagMap } from './common'
import type { FeatureParams } from './params'

export interface PointData<S extends PointStyle> {
  /**
   * [longitude, latitude, altitude]
   *
   * 若未指定 altitude 值，则取默认值 0。
   *
   * 当未指定 altitude 值时，建议将参数 isHeightBasedSurface 设置为 true，并结合参数 offset 使用
   */
  Coordinate: Coordinate
  /**
   * 指示 Feature 生成时，其高度是否基于场景上表面
   *
   * 若为 true，则高度为各点平面坐标处与场景上表面的交点加上 offset 参数的 z 值
   */
  IsHeightBasedSurface: boolean
  ID: string
  Name: string
  /** [x, y, z] 基于坐标的偏移量（米），其中 z 值代表绘制的平面所处高度 */
  Offset: Offset
  /** 其他参数 */
  Parameters: PointParams[S]
  /** 'Custom' | 'Marker01' | 'Marker02' | 'Label01' | 'Label02' | 'Label03' */
  Style: S
  Tag: TagMap
}

/** Point Parameters，不同 PointStyle 对应的补充参数接口 */
export interface PointParams {
  Custom: Pick<FeatureParams, 'Style'>
  Icon01: Pick<
    FeatureParams,
    | 'ImageHover'
    | 'ImageHoverSize'
    | 'ImageNormal'
    | 'ImageNormalSize'
    | 'TargetLength'
  >
  Label01: Pick<
    FeatureParams,
    'ImageBackgroundColor' | 'ImageNormal' | 'ImageNormalSize' | 'TargetLength'
  >
  Label02: Pick<
    FeatureParams,
    | 'ImageHover'
    | 'ImageHoverSize'
    | 'ImageNormal'
    | 'ImageNormalSize'
    | 'TargetLength'
  >
  Label03: Pick<
    FeatureParams,
    | 'ImageArrow'
    | 'ImageArrowSize'
    | 'ImageHover'
    | 'ImageHoverSize'
    | 'ImageNormal'
    | 'ImageNormalSize'
    | 'IsFixedLabelHeight'
    | 'IsFixedLabelWidth'
    | 'LabelHeight'
    | 'LabelMargin'
    | 'LabelWidth'
    | 'TargetLength'
  >
  Marker01: Pick<FeatureParams, 'Color' | 'Emissive' | 'Size' | 'TargetLength'>
  Marker02: Pick<
    FeatureParams,
    'CircleAmount' | 'Color' | 'Duration' | 'Emissive' | 'Size' | 'TargetLength'
  >
}

export type PointStyle =
  | 'Custom'
  | 'Icon01'
  | 'Label01'
  | 'Label02'
  | 'Label03'
  | 'Marker01'
  | 'Marker02'
