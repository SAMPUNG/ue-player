import type { UIDescriptor } from '../utils/command'

/** 视角控制 */
export interface ViewController {
  /**
   * 改变视角模式
   * - 0: SpringArm/摇臂镜头视角
   * - 1: GIS系统视角
   * - 2: Free/自由视角
   */
  changeMode(mode: ViewMode): Promise<UIDescriptor>

  /** 飞行到指定的位置 */
  flyTo(settings: ViewSettings): Promise<UIDescriptor>

  /** 聚焦到 Actor */
  // focusOn(): Promise<UIDescriptor>

  /** 获取当前视角 */
  getView(): Promise<ViewDescriptor>

  /** 视角初始化 */
  resetView(): Promise<UIDescriptor>
}

export declare const ViewController: ViewController

/**
 * 视角模式
 * - SpringArm: 摇臂镜头视角
 * - GIS: GIS 系统视角
 * - Free: 自由视角
 */
export enum ViewMode {
  SpringArm = 0,
  GIS,
  Free,
}

/**
 * 视角设置参数
 * - Location 位置坐标（UE位置）
 * - LockRotation 是否锁定视角方向。若为true，飞行后视角方向保持不变，若为false，飞行后视角方向变到InRotation指定的方向
 * - Rotation 视角方向（UE方向）
 * - LockDistance 是否锁定距离。当ViewMode为SpringArm模式时，若为true，则飞行后ArmLength保持不变，若为false，则飞行后ArmLength值变为InDistance；当ViewMode为GIS或Free模式时，若为true，飞行后相机将处于InLocation处，若为false，飞行后相机将与InLocation保持InDistance的距离长度
 * - Distance 距离（cm）
 * - Duration 飞行时间（s）
 */
export interface ViewSettings {
  Location: [x: number, y: number, z: number]
  LockRotation?: boolean
  Rotation?: [roll: number, pitch: number, yaw: number]
  LockDistance?: boolean
  Distance?: number
  Duration?: number
}
export interface ViewDescriptor extends UIDescriptor {
  Data: ViewSettings
}

/**
 * Get View 原始数据
 * - Location 示例: "X=0.000 Y=-29020.000 Z=31610.000"
 * - Rotation 示例: "P=-45.000000 Y=0.000000 R=0.000000"
 * - ArmLength 即 Distance
 */
export interface ViewSource {
  Location: string
  Rotation: string
  ArmLength: number
}
