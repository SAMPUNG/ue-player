import type { UIDescriptor } from '../utils/command'

/** Actor 控制 */
export interface ActorController {
  /** 隐藏指定 Tag 的 Actor */
  hide(tag: string): Promise<UIDescriptor>

  /** 显示指定 Tag 的 Actor */
  show(tag: string): Promise<UIDescriptor>
}

export declare const ActorController: ActorController
