import type { UIDescriptor } from '../utils/command'

/** 时间控制 */
export interface TimeController {
  /** 禁用实时，渲染场景中的时间不随服务器时间变化。 */
  disableRealtime(): Promise<UIDescriptor>

  /** 启用实时，渲染场景中的时间随服务器时间变化。 */
  enableRealtime(): Promise<UIDescriptor>

  /** 设置渲染场景中的时间，设置后渲染场景将禁用实时。 */
  setDateTime(dateTime: Date): Promise<UIDescriptor>
}

export declare const TimeController: TimeController
