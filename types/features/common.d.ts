export type Animate =
  | 'Immediately'
  | 'StartToEnd'
  | 'EndToStart'
  | 'MiddleToSide'
  | 'SideToMiddle'

/**
 * [longitude, latitude, altitude]
 *
 * 若未指定 altitude 值，则取默认值 0。
 *
 * 当未指定 altitude 值时，建议将参数 isHeightBasedSurface 设置为 true，并结合参数 offset 使用
 */
export type Coordinate = [longitude: number, latitude: number, altitude?: number]

export type Direction = 'Horizontal' | 'Vertical'

export type Margin = [top: number, right: number, bottom: number, left: number]

/** [x, y, z] 基于坐标的偏移量（米），其中 z 值代表绘制的平面所处高度 */
export type Offset = [x: number, y: number, z: number]

/** RGBA 颜色 */
export type RGBAColor = [R: number, G: number, B: number, A: number]

/**
 * 图片尺寸
 *
 * [sizeX, sizeY]
 */
export type SizeXY = [sizeX: number, sizeY: number]

/**
 * Feature Tag
 * - 设置 Feature 属性 Map
 * - key: string
 * - value: string / number / boolean
 */
export interface TagMap {
  [x: string]: string | number | boolean
}
