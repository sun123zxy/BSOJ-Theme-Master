# BSOJ Theme Master

A Chrome extension to manage themes on BSOJ

Made by sun123zxy

##Preview:

![/pic/preview.jpg](/pic/preview.jpg)

(Theme:`reimuAndMarisa.json`)

## How to Use

### How to Install

因为Chrome现在不允许加载非网上应用店的扩展了，所以请自行利用Chrome的开发者模式载入运行

### How to Set Up

安装插件后点击右上角插件图标弹出设置界面。

中央有一个大的表格，可以对其中的变量值进行任意更改

PS：这些变量值将会原封不动的写入注入页面的css中，所以有基础的同学不必拘泥于给定语法，只要按照css的语法往里面写就行 : )

| Name | Description | Grammar |
|-|-|-|
|bgImage| 背景图片地址 | `url({imageURL})` |
|bgPosition| 背景图片偏移量 | `{num}% {num}%` |
|opacity| 版面透明度 | `{0.0~1.0}` |
|bgColor| 普通板块背景颜色 | `{color}` |
|textColor| 普通字体颜色 | `{color}` |
|themeColor_Bg| 主题板块背景颜色 | `{color}` |
|themeColor_Text| 主题字体颜色 | `{color}` |

x1：`{}`表示需要自己填的部分（不包括大括号）

x2：`{color}`可以直接填颜色的名称，也可以输入16进制颜色码，详细语法参考css

更改完成后点击Confirm保存修改。

注：所有的修改都只会在刷新页面后生效，下文同

单击Reset可以使设置返回默认状态。

### How to Import/Export the Settings

单击Export导出JSON格式的设置到Inport/Export上方的文本框内。

导入设置请将JSON格式的设置输入到Inport/Export上方文本框内，然后单击Inport导入。

可参见`/exampleJson`下的示例JSON