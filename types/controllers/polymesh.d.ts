import type { PolymeshData, PolymeshStyle } from '../features/polymesh'
import type { Selector } from '../features/query'
import type { UIDescriptor } from '../utils/command'

/** Polymesh 控制 */
export interface PolymeshController {
  /** 生成 Polymesh */
  create(polymeshes: PolymeshData<PolymeshStyle>[]): Promise<UIDescriptor>

  /** 隐藏指定的 Polymesh */
  hide(params: Selector[]): Promise<UIDescriptor>

  /** 选择指定的 Polymesh */
  pick(params: Selector): Promise<UIDescriptor>

  /** 移除指定的 Polymesh */
  remove(params: Selector[]): Promise<UIDescriptor>

  /** 显示指定的 Polymesh */
  show(params: Selector[]): Promise<UIDescriptor>

  /** 取消选择的 Polymesh */
  unpick(): Promise<UIDescriptor>
}

export declare const PolymeshController: PolymeshController
