import type { PolygonData, PolygonStyle } from '../features/polygon'
import type { Selector } from '../features/query'
import type { UIDescriptor } from '../utils/command'

/** Polygon 控制 */
export interface PolygonController {
  /** 检查指定的 Polygon 是否已存在 */
  checkExistance(params: Selector[]): Promise<UIDescriptor>

  /** 生成 Polygon */
  create(polygons: PolygonData<PolygonStyle>[]): Promise<UIDescriptor>

  /** 隐藏指定的 Polygon */
  hide(params: Selector[]): Promise<UIDescriptor>

  /** 选择指定的 Polygon */
  pick(params: Selector): Promise<UIDescriptor>

  /** 删除指定的 Polygon */
  remove(params: Selector[]): Promise<UIDescriptor>

  /** 显示指定的 Polygon */
  show(params: Selector[]): Promise<UIDescriptor>

  /** 取消选择的 Polygon */
  unpick(): Promise<UIDescriptor>
}

export declare const PolygonController: PolygonController
