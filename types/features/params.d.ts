import type { Animate, Margin, RGBAColor, SizeXY } from './common'

/** Feature 补充参数查询接口 */
export interface FeatureParams {
  /**
   * 条纹角度（度）
   * - 建议值为 [0,360]
   */
  Angle?: number
  /** Polyline 创建后的显示动画 */
  Animate?: Animate
  /**
   * Polyline 动画速度（米/秒）
   * - 建议值为 (0, n)
   */
  AnimateSpeed?: number
  /**
   * Polyline 动画持续时间
   * - 建议值为 (0, n)
   */
  AnimateDuration?: number
  /**
   * 波纹个数
   * - 建议值为 [0-n)
   */
  CircleAmount?: number
  /**
   * 颜色 1
   * - [R, G, B, A]
   * - R/G/B: 0~255 的整数
   * - A: 0~1 之间的浮点数
   */
  Color: RGBAColor
  /**
   * 颜色 2
   * - [R, G, B, A]
   * - R/G/B: 0~255 的整数
   * - A: 0~1 之间的浮点数
   */
  Color2: RGBAColor
  /** 曲率，建议值为 (0, n) */
  Curvature: number
  /** 周期持续时间, 建议值为 (0-n) */
  Duration: number
  /** 弹跳周期（秒）, 建议值为 [0-n) */
  DurationPerBounce: number
  /** 自发光强度，建议值为 (1,100] */
  Emissive: number
  /** 图片结束淡化（消失）的距离（米），建议值为 (0,n) */
  FadeEndDistance: number
  /** 图片开始淡化的距离（米），建议值为 (0,n) */
  FadeStartDistance: number
  /** 标签文字大小，默认值为 24，建议值为 (0,n) */
  FontSize: number
  /** 流动速度，0 时不动，负值时反方向，建议值为 n */
  FlowSpeed: number
  /** 弹跳高度（米）, 建议值为 [0-n) */
  HeightPerBounce: number
  /**
   * 箭头图标图片资源字符串
   * - 模式 1: 图片 url，字符串必须以“http”开头；
   * - 模式 2: 图片 base64 编码，字符串必须以“data?:”开头；
   * - 模式 3: 约定好的虚幻引擎图片资源名称。
   * - 模式 4: 不设置该属性则为默认样式
   */
  ImageArrow: string
  /**
   * 箭头图标大小
   * - [sizeX, sizeY]
   * - 默认值为 64
   */
  ImageArrowSize: SizeXY
  /**
   * 图标背景色
   * - [R, G, B, A]
   * - R/G/B: 0~255 的整数
   * - A: 0~1 之间的浮点数
   */
  ImageBackgroundColor: RGBAColor
  /**
   * 图标处于 Hover 状态时图片资源字符串
   * - 模式 1: 图片 url，字符串必须以“http”开头；
   * - 模式 2: 图片 base64 编码，字符串必须以“data?:”开头；
   * - 模式 3: 约定好的虚幻引擎图片资源名称。
   * - 模式 4: 不设置该属性则为默认样式
   */
  ImageHover: string
  /**
   * 图标处于 Hover 状态时的图标大小
   * - [sizeX, sizeY]
   * - 默认值为 64
   */
  ImageHoverSize: SizeXY
  /**
   * 图标默认图片
   * - 模式 1: 图片 url，字符串必须以“http”开头；
   * - 模式 2: 图片 base64 编码，字符串必须以“data?:”开头；
   * - 模式 3: 约定好的虚幻引擎图片资源名称。
   * - 模式 4: 不设置该属性则为默认样式
   */
  ImageNormal: string
  /**
   * 图标默认大小
   * - [sizeX, sizeY]
   * - 默认值为 64
   */
  ImageNormalSize: SizeXY
  /**
   * @deprecated 图标大小
   * - [sizeX, sizeY]
   * - 默认值为 64
   */
  ImageSize: SizeXY
  /**
   * 浮于表面生成时的插值计算距离（米）
   * - 建议值为 (0,n)
   */
  InterpolationDistance?: number
  /**
   * 指示标签高度是否固定
   * - 默认值为 false
   */
  IsFixedLabelHeight?: boolean
  /**
   * 指示标签宽度是否固定
   * - 默认值为 false
   */
  IsFixedLabelWidth?: boolean
  /**
   * 是否首尾相连
   * - 默认为 false
   */
  IsLoop?: boolean
  /**
   * 标签高度
   * - IsFixedLabelHeight 为 true 时生效
   * - 默认值为 120
   * - 建议值为 (0,n)
   */
  LabelHeight: number
  /**
   * 标签外边距
   * - [top, right, bottom, left]
   * - 建议值均为 (0,n)
   */
  LabelMargin: Margin
  /**
   * 标签宽度
   * - IsFixedLabelWidth 为 true 时生效
   * - 默认值为 120
   * - 建议值为 (0,n)
   */
  LabelWidth: number
  /**
   * 条纹间线宽比例/虚实比例
   * - 建议值为 (0,n)
   */
  Ratio?: number
  /**
   * 每秒旋转度数（度）
   * - 建议值为 [0-n)
   */
  RotationPerSecond?: number
  /**
   * 条纹宽度缩放系数/长度缩放系数/贴图缩放比例
   * - 建议值为 (0,n)
   */
  Scale?: number
  /**
   * 直径大小（米）,
   * - 建议值为 (0,n)
   */
  Size?: number
  /**
   * 平滑度
   * - 值越小 Polyline 越平滑，但性能越差
   * - 默认值为 100
   * - 建议值为 (0, n)
   */
  Smoothness?: number
  /**
   * 流动速度
   * - 值为 0 时，停止流动
   * - 值为负时，反向流动
   */
  Speed?: number
  /** Custom Style */
  Style?: unknown
  /**
   * 点击 POI 点后摄像机到 POI 点的距离（米）
   * - 建议值为 (0,n)
   */
  TargetLength?: number
  /**
   * 宽度（米）
   * - 建议值为 (0, n)
   */
  Width?: number
}
