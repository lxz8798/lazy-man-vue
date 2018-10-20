# 小记

### 静态资源可以通过两种方式进行处理:

#### 1、以下情况下，资源不会被 webpack 处理，而是被直接拷贝：

<font size="8">放置在 public 目录下，即使未被使用。</font>
<font size="8">通过绝对路径被引用，即以 / 开头的路径。</font>

#### 2、以下情况下，资源会被 webpack 处理（URL的resolve、minify、uglify、转 base64 等）：

<font size="8">使用 JavaScript 导入。</font>
<font size="8">在 template/CSS 中通过相对路径（即以 . 开头或直接以文件（夹）名开头）被引用。</font>
<font size="8">URL 以 ~ 开头，其后的任何内容都会作为一个模块请求被解析。</font>
<font size="8">URL 以 @ 开头，它也会作为一个模块请求被解析（@ 是在 webpack 设置的 alias）。</font>
<font size="8">我们应该根据实际情况去选择我们要引用的资源是否要被处理，然后用对应的、正确的方式去引用它们以达到目的。以下对使用绝对路径和</font>
<font size="8">相对路径的方法和注意事项进行描述。</font>

## 使用绝对路径

<font size="8">默认情况下，Vue CLI 会假设你的应用是被部署在一个域名的根路径上（对应选项 baseUrl: '/'），例如 https://www.my-app.com/。如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径。例如，如果你的应用被部署在 https://www.my-app.com/my-app/，则设置 baseUrl 为 /my-app/。正因为以上的可能情况，我们应该在打算引用纯静态资源（那些不被webpack处理的资源，一般就是 public 目录下的资源）的时候，都确保使用 baseUrl 作为 URL 的开头，以下列举在不同文件中配合 baseUrl 选项写绝对路径的使用方法和注意事项：</font>

<font size="8">在入口html文件中使用</font>

<font size="8">我们可以使用lodash template 语法插入 baseUrl：</font>

`<link rel="icon" href="<%= BASE_URL %>favicon.ico" rel="external nofollow" >`

### 全局变量的设置 - 在项目根目录创建以下项目

.env        # 在所有环节中执行
.env.local     # 在所有环境中执行，git会ignored
.env.[mode]     # 只在特定环境执行( [mode] 可以是 "development", "production" or "test" )
.env.[mode].local  # 在特定环境执行, git会ignored
.env.development  # 只在生产环境执行
.env.production   # 只在开发环境执行