/** UE 指令集 */
export type ConsoleCommand =
  | 'PixelStreaming.Encoder.MaxMQ'
  | 'PixelStreaming.Encoder.MinMQ'
  | 'PixelStreaming.KeyFilter'
  | 'PixelStreaming.WebRTC.DegradationPreference'
  | 'PixelStreaming.WebRTC.HighQpThreshold'
  | 'PixelStreaming.WebRTC.LowQpThreshold'
  | 'PixelStreaming.WebRTC.MaxBitrate'
  | 'PixelStreaming.WebRTC.MaxFps'
  | 'PixelStreaming.WebRTC.MinBitrate'
  | 'PixelStreaming.WebRTC.StartBitrate'
  | 'r.DynamicRes.OperationMode'
  | 'r.setRes'
  | 'r.ScreenPercentage'
  | 'RestartLevel'
  | 'stat fps'
  | 'stat unit'

/** 视频流推送质量偏好 */
export type DegradationPreference =
  | 'BALANCED'
  | 'MAINTAIN_FRAMERATE'
  | 'MAINTAIN_RESOLUTION'
