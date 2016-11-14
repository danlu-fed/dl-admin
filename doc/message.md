# message 全局提示

``` js
import { message } from 'vue-franca';
```

## function local
---

局部配置方法，使用时配置调用。

* `message.info(content, duration)`
* `message.success(content, duration)`
* `message.error(content, duration)`
* `message.warning(content, duration)`
* `message.loading(content, duration)`

### params
`content`:
提示内容
- type： String
- default： no default

`duration`:
自动关闭延时，默认 1.5 秒后自动关闭，配置为 0 则不自动关闭，单位秒。
- type： Number
- default： 1.5

## function global
----

全局配置方法，在调用前提前配置，全局一次生效。

* `message.config({top:24, duration:1.5})`

### params
`top`:
消息距离顶部的位置
- type： Number
- default： 24

`duration`:
自动关闭延时，默认 1.5 秒后自动关闭，配置为 0 则不自动关闭，单位秒。
- type： Number
- default： 1.5

## example
---

``` js
// loading Usage
loding() {
  // create
  var instance = message.loading("loading...", 0);
  // success callback
  var ok = function() {
    instance.remove();
    message.success("ok!");
  }
  // remove
  setTimeout(ok, 2500);
},
```