# BSOJ Theme Master

A Chrome extension to manage themes on BSOJ

Made by sun123zxy

## Preview

暂缺

## Usage

### Install

因为Chrome现在不允许加载非网上应用店的扩展，所以请自行利用Chrome的开发者模式载入运行

### Set Up

安装插件后点击右上角插件图标弹出设置界面。

跳出表格，可以对其中的变量值进行任意更改。这些变量值将会原封不动的写入注入页面的css中，所以有基础的同学不必拘泥于给定语法，只要按照css的语法往里面写就行 : )

| Name | Description | Grammar |
|-|-|-|
|bgImage| 背景图片地址 | `url({imageURL})` |
|bgPosition| 背景图片偏移量 | `{num}% {num}%` |
|opacity| 版面透明度 | `{0.0~1.0}` |
|bgColor| 普通板块背景颜色 | `{color}` |
|textColor| 普通字体颜色 | `{color}` |
|themeColor_Bg| 主题板块背景颜色 | `{color}` |
|themeColor_Text| 主题字体颜色 | `{color}` |

x1: `{}`表示需要自己填的部分（不包括大括号）

x2: `{color}`可以直接填颜色的名称，也可以输入16进制颜色码，详细语法参考css

x3: 要纯色背景，请参考`\exampleJson\nightMode.json`是怎么处理`bgImage`的

更改完成后点击Confirm保存修改。

注：所有的修改都只会在刷新页面后生效，下文同

单击Reset可以使设置返回默认状态。

### How to Import/Export the Settings

单击Export导出JSON格式的设置到Inport/Export上方的文本框内。

导入设置请将JSON格式的设置输入到Inport/Export上方文本框内，然后单击Inport导入。

可参见`/exampleJson`下的示例JSON

## Q&A

Q: 使用插件后有的题图无法正常显示

有些题图背景是透明的，如果你设的背景颜色和图中字的颜色一样的话你就分不清了
