import type { PointData, PointStyle } from '../features/point'
import type { Selector } from '../features/query'
import type { UIDescriptor } from '../utils/command'

/** Point 控制 */
export interface PointController {
  /** 检查指定的 Point 是否已存在 */
  checkExistance(params: Selector[]): Promise<UIDescriptor>

  /** 生成 Point */
  create(points: PointData<PointStyle>[]): Promise<UIDescriptor>

  /** 隐藏指定的 Point */
  hide(params: Selector[]): Promise<UIDescriptor>

  /** 选择指定的 Point，注意同时只能选中一个 */
  pick(params: Selector): Promise<UIDescriptor>

  /** 删除指定的 Point */
  remove(params: Selector[]): Promise<UIDescriptor>

  /** 显示指定的 Point */
  show(params: Selector[]): Promise<UIDescriptor>

  /** 取消选择的 Point */
  unpick(): Promise<UIDescriptor>
}

export declare const PointController: PointController
