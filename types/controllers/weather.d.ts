import type { UIDescriptor } from '../utils/command'

/** 天气控制 */
export interface WeatherController {
  /** 根据预设变换天气效果 */
  changeByPreset(
    /** 天气预设类型 */
    preset: WeatherPreset,
    /** 变换时间（s） */
    duration?: number
  ): Promise<UIDescriptor>

  /** 根据参数变换天气效果 */
  changeBySettings(
    /** 天气参数 */
    settings: WeatherSettings,
    /** 变换时间（s） */
    duration?: number
  ): Promise<UIDescriptor>
}

export declare const WeatherController: WeatherController

/** 天气类型 */
export type WeatherPreset =
  | 'Sunny'
  | 'Cloudy_Light'
  | 'Cloudy_Medium'
  | 'Cloudy_Heavy'
  | 'Rainy_Light'
  | 'Rainy_Medium'
  | 'Rainy_Heavy'
  | 'Snowy_Light'
  | 'Snowy_Medium'
  | 'Snowy_Heavy'

/**
 * 天气参数
 * - CloudCoverage: 天空中的云覆盖度（1-10）
 * - Dust: 沙尘量（0-10）
 * - DustCoverage: 场景沙尘覆盖度（0-1）
 * - Fog: 雾量（1-10）
 * - Rain: 雨量（0-10）
 * - Snow: 雪量（0-10）
 * - SnowCoverage: 场景雪覆盖度（0-1）
 * - ThunderLightning: 雷电强度（0-10）
 * - Wetness: 场景湿润度（0-1）
 * - WindIntensity: 风强度（1-10）
 */
export interface WeatherSettings {
  /** 天空中的云覆盖度（1-10） */
  CloudCoverage?: number
  /** 沙尘量（0-10） */
  Dust?: number
  /** 场景沙尘覆盖度（0-1） */
  DustCoverage?: number
  /** 雾量（1-10） */
  Fog?: number
  /** 雨量（0-10） */
  Rain?: number
  /** 雪量（0-10） */
  Snow?: number
  /** 场景雪覆盖度（0-1） */
  SnowCoverage?: number
  /** 雷电强度（0-10） */
  ThunderLightning?: number
  /** 场景湿润度（0-1） */
  Wetness?: number
  /** 风强度（1-10） */
  WindIntensity?: number
}
