import type { Resolve, UIDescriptor, WebCommand, WebCommandData } from './utils/command'
import type {
  ConsoleCommand,
  DegradationPreference,
} from './utils/console-command'
import type { PixelStreamingPromise } from './utils/match-maker'
import type { EventDetail, EventType, Player } from './utils/web-component'

export * from './controllers'
export * from './features/common'
export * from './features/core'

export declare function executeUECommand(
  command: ConsoleCommand,
  data: string
): Promise<UIDescriptor>
export declare function sendCommand(
  command: WebCommand,
  Parameters?: unknown
): Promise<UIDescriptor>
export declare function connect2MatchMaker(): Promise<void>
export declare function connect2Signaling(url?: string): void
export declare function defineContainer(callback?: (elm: Player) => void)
export declare function disconnect(): void

export declare function getPixelStreamingInstance(
  url: string
): PixelStreamingPromise

export let player: Player | undefined

/** 设置云渲染实例带宽(Mb)上限 */
// export declare function setBandwidthCap(bandwidth: number): Promise<UIDescriptor>

/** 设置云渲染实例流送质量偏好 */
export declare function setDegradationPreference(
  degradationPreference: DegradationPreference
): Promise<UIDescriptor>

/** 设置云渲染实例动态分辨率 */
export declare function setDynamicResolution(
  force?: boolean
): Promise<UIDescriptor>

/** 设置云渲染实例帧率上限 */
// export declare function setFramerateCap(rate: number): Promise<UIDescriptor>

/** 设置云渲染实例分辨率 */
export declare function setResolution(
  width: number,
  height: number
): Promise<UIDescriptor>

/** 设置云渲染实例缩放比例 */
export function setScreenPercentage(percentage: number): Promise<UIDescriptor>

export {
  ConsoleCommand,
  DegradationPreference,
  EventDetail,
  EventType,
  Player,
  Resolve,
  UIDescriptor,
  WebCommand,
  WebCommandData,
}

export as namespace UE
