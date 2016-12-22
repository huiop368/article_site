---
order: 0
title: 类型、尺寸
---

按钮

````jsx
import Button from 'modules/antd-mobile/lib/button/index.web.js'
const ButtonExample = React.createClass({
  render() {
    return (<div className="btn-container">
      <Button type="primary" onClick={e => console.log(e)}>primary 按钮</Button>
      <div style={{ margin: '0 0.16rem' }}>
        <div style={{ height: '0.16rem' }} />
        <p style={{ margin: 10, color: '#999' }}>inline / small</p>
      </div>
    </div>);
  },
});
ReactDOM.render(<ButtonExample />, mountNode);
````
