---
order: 0
title: 类型、尺寸
---

按钮

````jsx
const ButtonExample = React.createClass({
  render() {
    return (<div className="btn-container">
      <div style={{ margin: '0 0.16rem' }}>
        <div style={{ height: '0.16rem' }} />
        <p style={{ margin: 10, color: '#999' }}>inline / small</p>
      </div>
    </div>);
  },
});
ReactDOM.render(<ButtonExample />, mountNode);
````
