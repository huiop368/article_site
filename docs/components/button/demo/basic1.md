---
order: 1
title: 幽灵模式/ghost
---

当操作并不需要太过强调/明显时，可以启动幽灵变量。

该变量是在原有按钮类型上的变形，主次等级遵循原有按钮的规则。


````jsx
const ButtonExample = React.createClass({
  getInitialState() {
    return {
      dark: false
    };
  },
  render() {
    return (
      <div className="button-container" style={{ backgroundColor: this.state.dark ? 'black' : 'white' }}>
        hello
      </div>
    );
  }
});

ReactDOM.render(<ButtonExample />, mountNode);
````

