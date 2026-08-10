# 青云书院初中部官网

深圳青云书院初中部官网源码。项目包含首页、关于我们、师资团队、课程设置、书院体系、招生入学、费用标准和校园生活等完整页面。

- **当前完整网站源码：[`public/`](./public/)**
- **GitHub Pages 发布副本：[`docs/`](./docs/)**
- 在线预览：https://cyancloudsacademy.wenyu528.chatgpt.site
- 学校域名：https://cyancloudsacademy.com
- 技术形态：静态 HTML / CSS / JavaScript + vinext 发布外壳

> `public/` 是唯一编辑源。`docs/` 是从 `public/` 自动生成的完整副本，用于 GitHub Pages，请不要单独修改。

## 快速开始

需要 Node.js 22.13 或更高版本。

```bash
npm install
npm run dev
```

也可以直接打开 `public/index.html` 查看静态版本。

提交代码前建议运行：

```bash
npm run sync:github-pages
npm run build
npm test
```

## 最常修改的位置

- 页面内容：`public/*.html`
- 全站视觉样式：`public/styles.css`
- 二级页面样式：`public/editorial.css`
- 首页交互：`public/script.js`
- 二级页面交互：`public/subpage.js`
- 图片和视频配置：`public/content/media-config.js`
- 图片素材：`public/assets/images/`
- 视频素材：`public/assets/videos/`

替换图片或视频时，优先修改 `public/content/media-config.js`，不需要直接改动页面结构。更完整的接手、素材和上线说明见 [HANDOFF.md](./HANDOFF.md)。

## 页面清单

| 页面 | 文件 |
| --- | --- |
| 首页 | `public/index.html` |
| 关于我们 | `public/about.html` |
| 师资团队 | `public/faculty.html` |
| 课程设置 | `public/curriculum.html` |
| 书院体系 | `public/academies.html` |
| 招生入学 | `public/admissions.html` |
| 费用标准 | `public/fees.html` |
| 校园生活 | `public/life.html` |

## 协作建议

1. 每一项修改从 `main` 新建分支。
2. 图片文件使用英文小写文件名，避免空格。
3. 不要在仓库中提交学生隐私、报名表数据、密码或云服务密钥。
4. 合并到 `main` 前检查桌面端、平板端和手机端排版。
5. 发布前确认所有导航、轮播、申请入口和视频均可正常使用。
