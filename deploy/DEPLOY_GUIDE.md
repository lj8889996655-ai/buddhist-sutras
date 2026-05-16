# 佛经宝库 - 部署指南

## 🚀 快速部署（推荐方案：Cloudflare Pages）

预计时间：10分钟
费用：完全免费

---

## 第一步：准备文件（已为您完成）

✅ 所有网站文件已准备就绪
✅ 已创建 Git 仓库初始化文件

---

## 第二步：创建 GitHub 账号（2分钟）

1. 打开 https://github.com
2. 点击 "Sign up"
3. 输入邮箱 → 创建密码 → 设置用户名
4. 验证邮箱

---

## 第三步：创建代码仓库（2分钟）

1. 登录 GitHub 后，点击右上角 "+" → "New repository"
2. 填写信息：
   - Repository name: `buddhist-sutras`
   - Description: `佛教经典在线阅读网站`
   - 选择 "Public"（公开）
   - ✅ 勾选 "Add a README file"
3. 点击 "Create repository"

---

## 第四步：上传网站文件（3分钟）

### 方法A：网页上传（最简单）

1. 在新创建的仓库页面，点击 "Add file" → "Upload files"
2. 将 `buddhist-sutras` 文件夹中的所有文件拖拽到上传区域：
   - index.html
   - videos.html
   - css/ 文件夹
   - js/ 文件夹
   - sutras/ 文件夹
   - images/ 文件夹
3. 等待上传完成
4. 填写提交信息："Initial commit"
5. 点击 "Commit changes"

### 方法B：使用 Git 命令（如果您已安装 Git）

```bash
# 在 buddhist-sutras 文件夹中打开命令行
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/您的用户名/buddhist-sutras.git
git push -u origin main
```

---

## 第五步：部署到 Cloudflare Pages（3分钟）

1. 打开 https://dash.cloudflare.com
2. 点击 "Sign up" 注册账号（可用邮箱注册）
3. 登录后，点击左侧菜单 "Pages"
4. 点击 "Create a project"
5. 选择 "Connect to Git"
6. 授权 Cloudflare 访问您的 GitHub 账号
7. 选择 `buddhist-sutras` 仓库
8. 点击 "Begin setup"
9. 配置如下：
   - Project name: `buddhist-sutras`（或您喜欢的名字）
   - Production branch: `main`
   - Build command: （留空，静态网站不需要）
   - Build output directory: （留空，根目录即可）
10. 点击 "Save and Deploy"

---

## 第六步：获得访问链接

部署完成后，Cloudflare 会提供类似以下的链接：

```
https://buddhist-sutras.pages.dev
```

🎉 **这就是您的网站公网地址！可以分享给任何人访问。**

---

## 自定义域名（可选）

如果您有域名，可以绑定：

1. 在 Cloudflare Pages 项目设置中，点击 "Custom domains"
2. 点击 "Set up a custom domain"
3. 输入您的域名（如 `jingdian.fojiao.com`）
4. 按照提示添加 DNS 记录
5. 等待 SSL 证书自动配置（约5分钟）

---

## 后续更新

当您需要修改网站内容时：

1. 修改本地文件
2. 上传到 GitHub 仓库
3. Cloudflare 会自动重新部署（约1-2分钟）

---

## 备选方案：GitHub Pages

如果 Cloudflare 访问有问题，可以使用 GitHub Pages：

1. 在 GitHub 仓库页面，点击 "Settings"
2. 左侧菜单点击 "Pages"
3. Source 选择 "Deploy from a branch"
4. Branch 选择 "main"，文件夹选择 "/ (root)"
5. 点击 "Save"
6. 等待几分钟，访问 `https://您的用户名.github.io/buddhist-sutras`

---

## 需要帮助？

如果在任何步骤遇到问题，请告诉我：
1. 您进行到哪一步
2. 遇到了什么错误提示
3. 我可以远程协助解决

---

**愿此网站利益一切众生** 🙏
