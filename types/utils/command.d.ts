/** 指令执行回调函数 */
export type Resolve = (descriptor: UIDescriptor) => void

/** 指令描述接口 */
export interface UIDescriptor {
  [x: string]: unknown
  /** UE Action to Web  */
  Action?: string
  /** Web Command to UE */
  Command?: WebCommand
  Console?: string
  /** UE Action 或 Web Command 所使用的数据 */
  Data?: unknown
  /** UE Action 或 Web Command 所使用的数据 */
  Parameters?: unknown
  /** Web Command 执行的结果 */
  Result?: unknown
  /** Web Command 发起时间 */
  Start?: number
  /** Web Command 发起时间 */
  Time?: number
  /** Web Command TTL */
  TTL?: number
  /**
   * [类型] Action | Command
   *
   * - Type 为 Action 时，Action 提供 UE Action 描述
   *
   * - Type 为 Command Command 提供 Web Command 描述
   */
  Type?: string
  /** 每一条 Web Command 绑定的 ID */
  UID?: string
}

/** UE Web 指令集 */
export type WebCommand =
  | 'AddArcGISWmtsLayer'
  | 'AddMapboxWmtsLayer'
  | 'AddTianDiTuWmtsLayer'
  | 'AddWmtsLayer'
  | 'CancelMeasure'
  | 'ChangeDebugMessages'
  | 'ChangeRequestHeaders'
  | 'ChangeViewMode'
  | 'ChangeWeatherByPreset'
  | 'ChangeWeatherBySettings'
  | 'ChangeWmtsLayer'
  | 'ChangeWmtsLayerIndex'
  | 'CheckExistanceOfPoint'
  | 'CheckExistanceOfPolygon'
  | 'CheckExistanceOfPolyline'
  | 'ClearMeasureResults'
  | 'CreatePoint'
  | 'CreatePolygon'
  | 'CreatePolyline'
  | 'CreatePolymesh'
  | 'DeletePoint'
  | 'DeletePolygon'
  | 'DeletePolyline'
  | 'DeletePolymesh'
  | 'DeleteWmtsLayer'
  | 'DeleteWmtsLayerByGroupID'
  | 'DisableRealtime'
  | 'EnableRealtime'
  | 'FlyTo'
  | 'FocusActor'
  | 'GetPosition'
  | 'HideActorByTag'
  | 'HidePoint'
  | 'HidePolygon'
  | 'HidePolyline'
  | 'HidePolymesh'
  | 'HideWmtsLayer'
  | 'HideWmtsLayerByGroupID'
  | 'LoadStreamLevels'
  | 'Mute'
  | 'OpenLevel'
  | 'PauseSequence'
  | 'PlaySequence'
  | 'ResetView'
  | 'SelectPoint'
  | 'SelectPolygon'
  | 'SelectPolyline'
  | 'SelectPolymesh'
  | 'SetBandwidthCap'
  | 'SetDateTime'
  | 'SetFramerateCap'
  | 'SetGeoReferencingParams'
  | 'SetResolution'
  | 'SetTerrainLayerByCesiumIon'
  | 'SetTerrainLayerByUrl'
  | 'SetVolume'
  | 'ShowActorByTag'
  | 'ShowPoint'
  | 'ShowPolygon'
  | 'ShowPolyline'
  | 'ShowPolymesh'
  | 'ShowWmtsLayer'
  | 'ShowWmtsLayerByGroupID'
  | 'StartMeasure'
  | 'StopSequence'
  | 'UnloadStreamLevels'
  | 'Unmute'
  | 'UnselectPoint'
  | 'UnselectPolygon'
  | 'UnselectPolyline'
  | 'UnselectPolymesh'

export interface WebCommandData {
  Parameters: unknown
}
