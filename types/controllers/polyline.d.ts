import type { Animate } from '../features/common'
import type { PolylineData, PolylineStyle } from '../features/polyline'
import type { Selector } from '../features/query'
import type { UIDescriptor } from '../utils/command'

/** Polyline 控制 */
export interface PolylineController {
  /** 检查指定的 Polyline 是否已存在 */
  checkExistance(params: Selector[]): Promise<UIDescriptor>

  /** 生成 Polyline */
  create(polylines: PolylineData<PolylineStyle>[]): Promise<UIDescriptor>

  /** 隐藏指定的 Polyline */
  hide(params: Selector[]): Promise<UIDescriptor>

  /** 隐藏指定的 Polyline，可指定隐藏动画和动画持续时间 */
  hideWithAnimateAndDuration(
    params: Selector[],
    animate: Animate,
    duration: number
  ): Promise<UIDescriptor>

  /** 隐藏指定的Polyline，可指定隐藏动画和动画速度 */
  hideWithAnimateAndSpeed(
    params: Selector[],
    animate: Animate,
    speed: number
  ): Promise<UIDescriptor>

  /** 选择指定的 Polyline */
  pick(params: Selector): Promise<UIDescriptor>

  /** 删除指定的 Polyline */
  remove(params: Selector[]): Promise<UIDescriptor>

  /** 显示指定的 Polyline */
  show(params: Selector[]): Promise<UIDescriptor>

  /** 显示指定的 Polyline，可指定显示动画和动画持续时间 */
  showWithAnimateAndDuration(
    params: Selector[],
    animate: Animate,
    duration: number
  ): Promise<UIDescriptor>

  /** 显示指定的 Polyline，可指定显示动画和动画速度 */
  showWithAnimateAndSpeed(
    params: Selector[],
    animate: Animate,
    speed: number
  ): Promise<UIDescriptor>

  /** 取消选择的 Polyline */
  unpick(): Promise<UIDescriptor>
}

export declare const PolygonController: PolylineController
