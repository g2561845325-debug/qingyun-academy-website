# 项目交接说明

## 1. 当前状态

网站已经具备完整可浏览版本，并已发布在线预览。后续工作主要是替换最终校方素材、继续调整文案与视觉细节、接入正式申请表单，以及将域名 `cyancloudsacademy.com` 指向最终部署平台。

当前在线预览：

https://cyancloudsacademy.wenyu528.chatgpt.site

## 2. 内容与页面

网站真实页面全部位于 `public/`。根目录中的 vinext 文件用于本地预览、构建和当前托管平台发布，不需要把静态页面重写成 React。

主要维护文件：

- `public/index.html`：首页内容与区块顺序
- `public/styles.css`：首页和全站公共样式
- `public/editorial.css`：二级页面版式
- `public/script.js`：首页轮播、菜单和交互
- `public/subpage.js`：二级页面菜单和交互
- `public/content/media-config.js`：全站主要图片、视频及裁切位置

## 3. 替换图片

最稳妥的方法是用新图片覆盖 `public/assets/images/` 中的同名文件。这样页面结构和图片位置不变。

需要单独更换某个位置时：

1. 将新图片放入 `public/assets/images/`。
2. 打开 `public/content/media-config.js`。
3. 找到对应页面和位置。
4. 修改 `src`、`alt` 和 `position`。

示例：

```js
"home.principal": {
  src: "./assets/images/principal-2026.jpg",
  alt: "青云书院初中部校长",
  position: "50% 30%",
},
```

推荐图片规格：

| 位置 | 推荐尺寸 | 比例 |
| --- | --- | --- |
| 首页首屏 | 2400 × 1350 | 16:9 |
| 二级页面首图 | 2200 × 1400 | 约 8:5 |
| 校长寄语 | 1200 × 1500 | 4:5 |
| 视频封面 | 1920 × 1080 | 16:9 |
| 正文横图 | 1600 × 1000 | 8:5 |

## 4. 替换视频

本地视频放入 `public/assets/videos/`，然后在 `public/content/media-config.js` 中将 `campusVideo.mode` 改为 `file`：

```js
campusVideo: {
  mode: "file",
  src: "./assets/videos/qingyun-campus-2026.mp4",
  type: "video/mp4",
  poster: "./assets/images/campus-video-poster.jpg",
  embedUrl: "",
  title: "青云书院校园影像",
},
```

建议使用 H.264 视频、AAC 音频和 1080p 分辨率。单个视频尽量控制在 80 MB 以内。

使用视频平台时，将 `mode` 改为 `embed`，并把平台提供的 iframe 播放地址填写到 `embedUrl`。不要填写普通分享页地址。

## 5. 本地开发与检查

```bash
npm install
npm run dev
```

构建检查：

```bash
npm run build
npm test
```

重点检查：

- 首页轮播能自动切换，圆点和左右按钮均可点击
- 导航二级菜单、三级入口和各页面链接可进入
- 悬浮申请入口不会遮挡轮播按钮或正文
- 中文和英文标题没有乱码、重叠或异常换行
- 手机端菜单、图片裁切和文字尺寸正常
- 申请、探校、费用与师资入口指向正确页面

## 6. GitHub 协作

推荐使用以下流程：

```bash
git checkout -b feature/修改内容
git add .
git commit -m "说明本次修改"
git push -u origin feature/修改内容
```

然后在 GitHub 发起 Pull Request，由另一位同事检查后合并到 `main`。

## 7. 正式上线

这个项目可以继续使用当前托管，也可以迁移到 Cloudflare Pages、Vercel、Netlify 或阿里云 OSS 静态网站托管。正式部署后，在阿里云域名控制台添加部署平台给出的 DNS 记录。

上线前不要提前删除当前预览版本。确认正式域名 HTTPS、首页、全部二级页面和申请入口均可访问后，再切换对外宣传链接。

