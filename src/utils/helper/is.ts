/*
  * 数据类型检测工具汇总
  * * * @function isArray: 检测给定的值是否为数组
  * * * @function isObject: 检测给定的值是否为对象（注意：在JavaScript中，数组和null也会被认为是对象）
  * * * @function isString: 检测给定的值是否为字符串
  * * * @function isNumber: 检测给定的值是否为数字
  * * * @function isFunction: 检测给定的值是否为函数（包括异步函数）
  * * * @function isAsyncFunction: 检测给定的值是否为异步函数
  * * * @function isRegExp: 检测给定的值是否为正则表达式对象
  * * * @function isDef: 检测给定的值是否已定义（即不是undefined）
  * * * @function isUnDef: 检测给定的值是否未定义（即为undefined）
  * * * @function isNull: 检测给定的值是否为null
  */

export function dataTypeCheck(value: unknown, type: string): boolean {
  return Object.prototype.toString.call(value) === `[object ${type}]`
}

export function isArray(value: unknown): boolean {
  return dataTypeCheck(value, 'Array')
}

export function isObject(value: unknown): boolean {
  return dataTypeCheck(value, 'Object')
}

export function isString(value: unknown): boolean {
  return dataTypeCheck(value, 'String')
}

export function isNumber(value: unknown): boolean {
  return dataTypeCheck(value, 'Number')
}

export function isFunction(value: unknown): boolean {
  return dataTypeCheck(value, 'Function') || isAsyncFunction(value)
}

export function isAsyncFunction(value: unknown): boolean {
  return dataTypeCheck(value, 'AsyncFunction')
}

export function isRegExp(value: unknown): boolean {
  return dataTypeCheck(value, 'RegExp')
}

export function isDef(value: unknown): boolean {
  return !dataTypeCheck(value, 'Undefined')
}

export function isUnDef(value: unknown): boolean {
  return !isDef(value)
}

export function isNull(value: unknown): boolean {
  return dataTypeCheck(value, 'Null')
}
