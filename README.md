---
# 数值进度条插件
-------------

#### 使用注意：

1.本插件依赖zepto或者jQuery、artTemplate、requirejs，以及requirejs的text模块
2.在progressBar.js里引入artTemplate以及模板文件

```javascript
define(['artTemplate', 'text!../progressBar.html'], function(template, tpl) {});
```

3.并且引入CSS文件

```html
<link rel="stylesheet" href="css/progressBar.css">
```

4.在requirejs中定义progressBar.html的引用，此文件为模板文件

####使用示例：
html:
```html
<div id="basicStyle"></div>
```
js:
```javascript
new progress({
	container: '#basicStyle', //父节点对象
	anchors: [0, 3600], //锚点值的数组
	current: 3000, //当前进度值
	isRoundAnchor: false //每个锚点是否以圆点显示
});
```
