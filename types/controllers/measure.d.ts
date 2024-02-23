import type { UIDescriptor } from '../utils/command'

/** 测量控制 */
export interface MeasureController {
  /** 取消测量 */
  cancel(): Promise<UIDescriptor>

  /** 清除测量结果*/
  clearResults(): Promise<UIDescriptor>

  /** 开始测量 */
  start(type: MeasureType): Promise<UIDescriptor>
}

export declare const MeasureController: MeasureController

/** 测量类型 */
export type MeasureType = 'Area' | 'Distance' | 'Height'

