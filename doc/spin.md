# v-spin 局部区块加载中

用于页面和区块的加载中状态。

## props
---

`size`:
- type： String
- default： 'default'
- optional： ['small','default','large']

`spinning`:
- type： boolean
- default： true

`tip`:
- type： String
- default： no default

## slot
---

``` js
<v-spin :spinning="true">
  // Regional block
</v-spin>
```