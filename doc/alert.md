# v-alert 警告提示

  警告提示显示

## Props
---

`type`:
- type: String
- default: 'info'
- optional: ['success','info','warning','error']

`closable`:
- description: 可选参数，默认不显示关闭按钮
- type: Boolean
- default: false

`closeText`:
- description: 可选参数，自定义关闭按钮
- type: String
- default： no default

`message`:
- description: 必选参数，警告提示内容
- type: String
- default： no default

`description`:
- description: 可选参数，警告提示的辅助性文字介绍
- type: String
- default: no default



`showIcon`:
- description: 可选参数，是否显示辅助图标
- type: Boolean
- default: false

`closed`:
- description: 可选参数，控制组件隐藏显示，默认显示
- type: Boolean
- default: false

## Function

`onClose()`:
- description: 可选参数，关闭时触发的回调函数
- type: Function
- default: no default