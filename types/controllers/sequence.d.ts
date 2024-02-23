import type { UIDescriptor } from '../utils/command'

/** 过场控制 */
export interface SequenceController {
  /** 暂停过场动画，可设置是否锁定相机 */
  pause(isLockCamera: boolean): Promise<UIDescriptor>

  /** 播放过场动画 */
  play(sequenceName: string): Promise<UIDescriptor>

  /** 停止播放过场动画 */
  stop(): Promise<UIDescriptor>
}

export declare const SequenceController: SequenceController
