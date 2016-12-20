---
category: Components
type: Data Entry
chinese: 按钮
english: Button
source: design
---

点击后会触发一个操作。

### 规则
- 同个页面只有一个主按钮。


## API

| 成员        | 说明           | 类型      | 默认值       |
|------------|----------------|--------------------|--------------|
| type       | 按钮类型，可选值为`primary`/`ghost`/`warning`或者不设     |   string   |   -  |
| size       | 设置按钮大小，可选值为`large`、`small` | string | `large`|
| activeStyle  | 禁止点击反馈效果(设为 false)，也可设置为自己的点击 style | false/{} | {} |
| disabled   | 是否不可用      | boolean |    false  |
| onClick    | 点击按钮的回调函数 | (e: Object): void |   无  |
