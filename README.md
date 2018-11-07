# umi-antd-mobile

#### 如果本项目对你有帮助，请不要吝啬你的star

以 [UMI](https://umijs.org/zh/) + [DVA](https://dvajs.com/) 为底层框架，包含完整的前端工程化实践

参考了 [ant-pro](https://pro.ant.design/index-cn)

## 目录结构

    |-- config                                # umi配置，包含路由配置
    |-- mock                                  # 本地模拟数据
    |-- chrome-mac                            # chrome，用来支持E2E测试
    |-- public                                
    |   |-- favicon.png                       # Favicon
    |   |-- iconfont                          # 字体图标资源
    |-- src                                   # 开发目录
    |   |-- assets                            # 本地静态资源
    |   |-- components                        # 业务组件
    |   |-- layout                            # 布局组件
    |   |-- models                            # 全局dva model
    |   |-- services                          # 接口服务
    |   |-- pages                             # 页面模板
    |   |-- tests                             # 单元测试
    |   |-- e2e                               # 冒烟测试／ui测试
    |   |-- global.css                        # 全局css
    |-- .gitignore                            # git忽略文件
    |-- .editorconfig                         # 编辑器代码风格配置
    |-- .eslintignore                         # eslint忽略文件
    |-- .eslintrc                             # eslint规则
    |-- .prettierignore                       # 代码风格配置忽略文件
    |-- .prettierrc                           # 代码风格配置文件
    |-- .stylelintrc                          # 样式风格配置文件
    |-- package.json                          # 依赖及配置
    |-- README.md                             # 简介

## 使用

```javascript

// 安装项目

git clone --depth=1 https://github.com/jinjinwa/umi-antd-mobile.git my-project

cd my-project

// 检出依赖
yarn

// 运行
yarn start

// 打包
yarn build

// 更多命令可在package.json中查看
```

## 测试

单元测试你需要掌握的几个库

- Google Chrome官方出品的无洁面chrome工具： [puppeteer](https://zhaoqize.github.io/puppeteer-api-zh_CN/#/)

- FaceBook推出的javascript单元测试框架，可搭配别的一起使用： [jest](https://jestjs.io/zh-Hans/)

- Airbnb推出的React测试框架: [enzyme](https://airbnb.io/enzyme/)


1:puppeteer 下载问题：env PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true 

2:启动Chromium问题，请手动下载Chromium对应版本（和puppeteer对应），并在puppeteer.launch的executablePath配置中对应路径。
https://npm.taobao.org/mirrors/chromium-browser-snapshots/Mac/

(在 node_modules 中找到puppeteer，在package.json中找到对应的chromium_revision依赖版本，在以上链接下载。然后保存至根目录 chrome-mal)

ps：参考 https://juejin.im/post/5b99c9ece51d450e51625630  

## 样式

使用less作为样式语言，在使用期前，可以了解一下less的相关特性。[Less](http://lesscss.org/)

为了避免样式的全局污染和多人开发带来的命名冲突，推荐使用Css modules模块化方案。 [Css Modules](https://github.com/camsong/blog/issues/5)
严格区分全局样式，局部样式，以及组件库样式覆盖。

## 业务图标库
使用阿里 [iconfont](http://iconfont.cn/)  图标库，在这里创建项目，Font class方式使用。开发阶段可以使用在线链接，发布时候采用，将源文件下载至本地。/src/public/iconfont 目录下。

1:在 /src/pages/document.ejs 引入iconfont目录下css文件(在线链接)。

```javascript
//at.alicdn.com/t/font_405362_lyhvoky9rc7ynwmi.css

<link href="/iconfont/iconfont.css" rel="stylesheet" />
```

2: 在 /src/components简单封装了图标组件，你可以这样使用

```javascript
import BizIcon from '../BizIcon'

<BizIcon type="xxx" />
```

## 移动端滚动问题

避免使用 外层容器设置overflow:hidden模拟的滚动，在ios下会很卡顿，加了-webkit-overflow-scrolling : touch；之后，会引起更多的问题。详情请看这里 [深入研究-webkit-overflow-scrolling:touch以及ios滚动](https://www.cnblogs.com/xiahj/p/8036419.html)

正确的姿势：
1: 通过布局技巧，使用body滚动。如本项目中，我对tabBar组件嵌套路由的处理。
2: 封装滚动容器实现局部滚动。

## TODO

- [x] tabBar嵌套路由
- [x] 集成nprogress进度条
- [x] 部署示例
- [ ] 封装滚动容器
- [ ] 封装antd-mobile没有的常用组件
- [ ] mock数据示例
- [ ] 具体业务覆盖单元测试例子
