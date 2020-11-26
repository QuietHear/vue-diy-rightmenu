# vue版 自定义右键菜单
## 安装
	npm i vue-diy-right-menu

### 1. 参数
* `cname`：自定义class-->String;非必传;
* `hide-on-click`：点击menu列表后是否隐藏menu列表-->Boolean;非必传,默认true;

### 2. 插槽
* `默认插槽`：替换显示的内容
* `menu插槽`：替换默认menu列表
>
      <ul>
        <li>1</li>
        <li>2</li>
      </ul>
      <ul slot="menu">
        <li>11</li>
        <li>22</li>
      </ul>

### 3. 返回默认事件
* `clickDom`：鼠标右击的回调，返回选中的DOM
* `defaultEdit`：默认菜单列表的编辑回调，返回之前选中的DOM
* `defaultDelete`：默认菜单列表的删除回调，返回之前选中的DOM