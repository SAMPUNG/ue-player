import type { UIDescriptor } from '../utils/command'

/** 场景控制 */
export interface LevelController {
  /** 打开指定关卡 */
  openLevel(
    /** 主关卡名称 */
    mainLevelName: string,
    /** 流关卡名称列表 */
    streamLevelNames: string[]
  ): Promise<UIDescriptor>

  /** 重启关卡 */
  restartLevel()

  /** 加载流关卡 */
  loadStreamLevels(
    levelNames: string[],
    unloadOtherStreamLevels?: boolean,
    makeVisibleAfterLoad?: boolean,
    shouldBlockOnLoad?: boolean
  ): Promise<UIDescriptor>

  /** 卸载流关卡 */
  unloadStreamLevels(
    levelNames: string[],
    shouldBlockOnLoad?: boolean
  ): Promise<UIDescriptor>
}

export declare const LevelController: LevelController
