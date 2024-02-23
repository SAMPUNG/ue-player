import type { UIDescriptor } from '../utils/command'

/** 系统控制 */
export interface SystemController {
  /** 设置云渲染实例关闭声音 */
  mute(): Promise<UIDescriptor>

  /** 设置云渲染实例音量大小，[0.0,1.0] */
  setVolume(volume: number): Promise<UIDescriptor>

  /** 设置云渲染实例打开声音 */
  unmute(): Promise<UIDescriptor>
}

export declare const SystemController: SystemController
