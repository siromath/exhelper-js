# exhelper-js

- [Install](#Install)
- [Documentation](#Documentation)

## Install

```bash
npm install exhelper-js
```

```typescript
// CommonJS
const ex = require('exhelper-js').default

// ESModules
import ex from 'exhelper-js'
```

## Documentation

### `?:`

```typescript
ex['?:']<S, T>(value1: S, value2: T): S | T
```

`value1 || value2` の結果を返します。

#### Example

```typescript
ex['?:']('foo', 'bar') // => 'foo'

ex['?:'](undefined, 'bar') // => 'bar'
```

### `??`

```typescript
ex['??']<S, T>(value1: S, value2: T): T | NonNullable<S>
```

`value1 ?? value2` ([Nullish coalescing operator](https://github.com/tc39/proposal-nullish-coalescing)) の結果を返します。

#### Example

```typescript
ex['??']('foo', 'bar') // => 'foo'

ex['??'](undefined, 'bar') // => 'bar'

ex['??'](null, 'bar') // => 'bar'
```

### `<=>`

```typescript
ex['<=>'](value1: number, value2: number): 1 | -1 | 0
```

`value1` が `value2` より大きければ `1` , `value2` が `value1` より大きければ `-1` , それ以外の場合は `0` を返します。

#### Example

```typescript
ex['<=>'](2, 1) // => 1

ex['<=>'](1, 2) // => -1

ex['<=>'](1, 1) // => 0
```

### `isObject`

```typescript
ex.isObject(arg: unknown): boolean
```

`arg` がオブジェクトなら `true` , そうでない場合は `false` を返します。

#### Example

```typescript
ex.isObject({ a: 1 }) // => true

ex.isObject({}) // => true

ex.isObject([1, 2, 3]) // => false

ex.isObject(null) // => false
```

### `typeof`

```typescript
ex.typeof(arg: unknown): 'string' | 'number' | 'bigint' | 'boolean' | 'symbol' | 'undefined' | 'object' | 'function' | 'array' | 'null'
```

`arg` が配列の場合は `'array'` , `null` の場合は `'null'` , それ以外の場合は `typeof arg` の結果を返します。

#### Example

```typescript
ex.typeof([1, 2, 3]) // => 'array'

ex.typeof(null) // => 'null'

ex.typeof('foo') // => 'string'
```

### `length`

```typescript
ex.length(arg: unknown): number | undefined
```

`arg` が文字列か配列の場合は `arg.length` , `arg` がオブジェクトの場合は `Object.keys(arg).length` , それ以外の場合は `undefined` を返します。

#### Example

```typescript
ex.length([1, 2, 3]) // => 3

ex.length({ a: 1, b: 2 }) // => 2
```

### `sum`

```typescript
ex.sum(nums: number[]): number
```

数値の配列の全要素の和を返します。

#### Example

```typescript
ex.sum([1, 2, 3, 4]) // => 10
```

### `product`

```typescript
ex.product(nums: number[]): number
```

数値の配列の全要素の積を返します。

#### Example

```typescript
ex.product([1, 2, 3, 4]) // => 24
```