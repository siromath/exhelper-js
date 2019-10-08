# exhelper-js

- [Install](#Install)
- [Documentation](#Documentation)

## Install

```bash
npm install exhelper-js
```

```javascript
// CommonJS
const ex = require('exhelper-js')

// ESModules
import ex from 'exhelper-js'
```

## Documentation

### `?:`

```javascript
ex['?:'](value1, value2)
```

`value1 ? value1 : value2` の結果を返します。

#### Example

```javascript
ex['?:']('foo', 'bar') // => 'foo'

ex['?:'](undefined, 'bar') // => 'bar'
```

### `??`

```javascript
ex['??'](value1, value2)
```

`(value1 !== null) ? value1 : value2` の結果を返します。

#### Example

```javascript
ex['??']('foo', 'bar') // => 'foo'

ex['??'](undefined, 'bar') // => undefined

ex['??'](null, 'bar') // => 'bar'
```

### `<=>`

```javascript
ex['<=>'](value1, value2)
```

`value1` が `value2` より大きければ `1` , `value2` が `value1` より大きければ `-1` , それ以外の場合は `0` を返します。

#### Example

```javascript
ex['??']('foo', 'bar') // => 'foo'

ex['??'](undefined, 'bar') // => undefined

ex['??'](null, 'bar') // => 'bar'
```

### `isObject`

```javascript
ex.isObject(arg)
```

`arg` がオブジェクトなら `true` , そうでない場合は `false` を返します。

#### Example

```javascript
ex.isObject({ a: 1 }) // => true

ex.isObject({}) // => true

ex.isObject([1, 2, 3]) // => false

ex.isObject(null) // => false
```

### `typeof`

```javascript
ex.typeof(arg)
```

`arg` が配列の場合は `'array'` , `null` の場合は `'null'` , それ以外の場合は `typeof arg` の結果を返します。

#### Example

```javascript
ex.typeof([1, 2, 3]) // => 'array'

ex.typeof(null) // => 'null'

ex.typeof('foo') // => 'string'
```

### `length`

```javascript
ex.length(arg)
```

`arg` が文字列か配列の場合は `arg.length` , `arg` がオブジェクトの場合は `Object.keys(arg).length` , それ以外の場合は `undefined` を返します。

#### Example

```javascript
ex.length([1, 2, 3]) // => 3

ex.length({ a: 1, b: 2 }) // => 2
```

### `sum`

```javascript
ex.sum(nums)
```

数値の配列の全要素の和を返します。

#### Example

```javascript
ex.sum([1, 2, 3, 4]) // => 10
```

### `product`

```javascript
ex.product(nums)
```

数値の配列の全要素の積を返します。

#### Example

```javascript
ex.product([1, 2, 3, 4]) // => 24
```