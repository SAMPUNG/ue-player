/**
 * 查找条件
 * - 逻辑运算符: '=='、'!='、'in'、'not in'
 * - 数学选择器: '>'、'>='、'<'、'<='
 * - 例1: ['年龄','>=',[18]]
 * - 例2: ['血型','in',['A','B']]
 */
export type Condition = [
  key: string,
  operation: LogicalOperation | MathicOperation,
  values: (string | number | boolean)[]
]

type LogicalOperation = '==' | '!=' | 'in' | 'not in'
type MathicOperation = '>' | '>=' | '<' | '<='

/**
 * 查找条件可以为'Name'、'ID'、'Tags'中的一种或多种
 * - 传入 ID 或 Name 可以直接匹配
 * - 传入 Conditions 和 Operator 可以从 Tags 中匹配
 * - Operator: 'And'、'Or'，默认值为 'And'
 * - Condition: [key, operation, values]
 * - 逻辑运算符: '=='、'!='、'in'、'not in'
 * - 数学选择器: '>'、'>='、'<'、'<='
 * - 例1: { Operator:'And', Conditions: [['年龄','>=',[18]],['血型','in',['A','B']]] }
 * - 例2: { ID: 'pt-marker01-01', Name: 'Marker 01' }
 */
export interface Selector {
  ID?: string
  Name?: string
  Operator?: 'AND' | 'OR'
  Conditions?: Condition[]
}
