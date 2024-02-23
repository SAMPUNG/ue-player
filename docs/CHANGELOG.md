All notable changes to this project will be documented in this file.

# Next

**新增**

- 方法: 注册全局模块，或在CVE 命名空间下，直接调用全部 SDK 的方法
- 特性: Features Params 提供构造函数

# [0.1.5] 2024-02-22

**修复**

- 方法: View Controller 中 Get View 无法调用的问题修复

**新增**

- 方法: Level Controller 方法 Restart Level 重启关卡
- 指令: Console 指令及调用方法 executeUECommand
- 方法: setResolution/setScreenPercentage 设置渲染分辨率
- 方法: setDynamicResolution 设置动态渲染分辨率
- 方法: setDegradationPreference 设置编码偏好

# [0.1.4] 2024-02-01

**变更**

- 方法: View Controller 中 Fly To 参数调整

**更新**

- 文档: 关于引入 `<ue-player>` 需要调用 defineContainer 方法的说明

**新增**

- 特性: defineContainer 回调函数接收新创建 player 实例参数
- 特性: 保留控制台日志

# [0.1.3] 2024-01-31

**修复**

- BUG: View Controller 中 Fly To 参数构造修复
- BUG: Feature 相关交互增加更多容错

**新增**

- 事件: 新增 command 事件用于调试

# [0.1.2] 2024-01-30

**变更**

- 默认不加载调试面版，通过绑定创建方式手动挂载

**新增**

- View Controller 增加获取当前视角和重置视角的方法

# [0.1.1] 2024-01-26

**修复**

- TypeScript 导出修复

# [0.1.0] 2024-01-25

**变更**

- 重大: Geometry Feature 创建时 Tags 使用 JSON 对象
- 重大: Geometry Feature 操作时 ID/Name 使用字符串数组
- 重大: Geometry Selector 中 Conditions/Operator 层级提高，移除 Tags 属性
- Controls 各项函数集统一命名为 Controller，有后缀
- Player 不再对外暴露执行自定义指令的方法和指令执行记录
- 属性: `<ue-player>` url 属性更名为 match-maker-url

**新增**

- 属性: 通过 signaling-url 直接接入视频流
- 方法: PolymeshData 构造函数
- 方法: ViewController 视角控制

**移除**

- 方法: `<ue-player>` 控制尺寸相关的方法全部移除
- 属性: `<ue-player>` level-name/scene-name 属性移除
- 方法: MeasureControl/SceneControl 移除

# [0.0.6] 2023-12-21

**更新：**

- 文档: 项目变更日志重写
- 文档: 开发者文档重写

# [0.0.5] 2023-12-21

**新增**

- 方法: Scene 补充流关卡控制方法

# [0.0.4] 2023-12-20

**新增**

- 事件: `<ue-player>` enter/leave，鼠标移入移出事件

**修复**

- BUG: Controls 回调函数执行异常

# [0.0.3] 2023-12-15

**修复**

- BUG: Camera Control 中 getPosition 方法执行后参数未返回
- BUG: Point/Polyline/Polygon 要素 pick 事件未广播

**新增**

- 方法: 切换调试日志窗口显示模式

# [0.0.2] 2023-12-04

**更新**

- 文档: 项目变更日志重写
- 文档: 开发者文档重写

**修复：**

- BUG: 点/线/面使用数组批量创建，类型错误修复

# [0.0.1] 2023-11-30

**新增**

- Web Component: `ue-player`，用于接入 UE 像素流
- 函数集: Controls，封装多种业务场景 UE 指令的工具集合
- 数据接口: Features，提供点/线/面的数据格式及构造方法
