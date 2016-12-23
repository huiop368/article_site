---
order: 0
english: Ant Design Mobile of React
---

`antd-mobile` 是 Ant Design 的移动规范的 React 实现，服务于蚂蚁及口碑无线业务。

[Ant Design](http://ant.design) 在中后台领域的耕耘取得了很多成绩，使得 Ant Design 设计规范和 React 逐渐成为蚂蚁金服主流的前端产品开发模式，也受到社区的广泛关注。我们没有止步于此，一年后推出了 Ant Design 移动端规范及其实现。

随着蚂蚁金服中后台的移动端需求增多，不同的设计规范及研发方式，给设计者和开发者带来大量的重复工作，降低了产品的研发效率。

我们希望为设计者和开发者提供一套统一的设计规范，可以降低设计、开发成本，减少沟通误差。不同于大多数设计规范，我们抽象出通用组件的基础样式和组件属性，使得拓展性更强。基于这套规范我们可以快速实现页面，提高研发效率，也希望借此推进蚂蚁金服各应用向设计规范化的方向发展。


## 特性

- 基于 Ant Design 移动设计规范。
- 规则化的视觉样式配置，适应各类产品风格。
- 基于 React Native 的多平台支持。
- 使用 TypeScript 开发，提供类型定义文件。

## 安装

```bash
$ npm install antd-mobile --save
```

## 使用

```jsx
import { Button } from 'antd-mobile';

ReactDOM.render(<Button>按钮</Button>, mountNode);
```

无需单独引入样式，使用 [babel-plugin-antd](https://github.com/ant-design/babel-plugin-antd) 按需加载，并引入相关样式。

```js
{
  "plugins": [
    ["antd", {
      style: 'css',  // 'less',
      libraryName: 'antd-mobile',
    }]
  ]
}
```

## 版本

- 稳定版：[![npm package](http://img.shields.io/npm/v/antd-mobile.svg?style=flat-square)](http://npmjs.com/package/antd-mobile)
- 开发版：[![npm package](https://cnpmjs.org/badge/v/antd-mobile.svg?tag=beta&style=flat-square)](http://npmjs.com/package/antd-mobile)

## 体积

- 构建后总体积：`~110KB`
- 按需加载：只需引入业务中需要的组件即可，未 import 进来的组件不会打包进来。

## 浏览器支持

- `iOS`
- `Android 4.0+`

## 链接

- [首页](/)
- [开发文档](http://github.com/ant-design/ant-design-mobile/blob/master/development.md)
- [React 模块](http://github.com/react-component)

## 谁在使用

- 蚂蚁金服
- 阿里巴巴
- 口碑

## API
hello
