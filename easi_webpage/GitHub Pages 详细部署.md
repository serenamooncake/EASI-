# GitHub Pages 详细部署步骤

## 第一步：准备 GitHub 账号

1. **注册/登录 GitHub**
   - 访问 https://github.com
   - 如果没有账号，请先注册一个免费账号
   - 如果已有账号，请直接登录

## 第二步：创建新仓库

1. **创建仓库**
   - 点击页面右上角的 **"+"** 按钮
   - 选择 **"New repository"**

2. **填写仓库信息**
   - **Repository name**: 输入仓库名称，例如 `easi-scorad-calculator`
   - **Description**（可选）: 皮肤评分计算器 - 中文版
   - **Public/Private**: 选择 **Public**（GitHub Pages 免费版需要公开仓库）
   - **不要**勾选 "Initialize this repository with a README"
   - **不要**添加 .gitignore 或 license
   - 点击 **"Create repository"**

## 第三步：上传项目文件

### 方法 A：通过网页界面上传（最简单，推荐）

1. **在仓库页面**
   - 找到 "…or upload an existing file" 链接并点击

2. **上传文件**
   - 打开您的项目文件夹 `d:\Users\Serena\Desktop\easi_webpage`
   - 选中**所有**文件和文件夹（不要只选文件夹本身）
   - 将它们拖拽到 GitHub 的上传区域
   - 或者点击 "choose your files" 手动选择

3. **提交更改**
   - 在页面底部填写提交信息：
     - "Commit changes" 输入框：`Initial commit - Chinese version`
   - 点击 **"Commit changes"** 按钮

### 方法 B：使用 Git 命令行（如果您安装了 Git）

如果您的电脑已安装 Git，可以使用命令行：

```bash
# 1. 在项目文件夹中打开命令行
cd d:\Users\Serena\Desktop\easi_webpage

# 2. 初始化 git
git init

# 3. 添加所有文件
git add .

# 4. 提交
git commit -m "Initial commit - Chinese version"

# 5. 关联到您的 GitHub 仓库（替换为您的用户名和仓库名）
git remote add origin https://github.com/您的用户名/您的仓库名.git

# 6. 推送到 GitHub
git branch -M main
git push -u origin main
```

## 第四步：启用 GitHub Pages

1. **进入仓库设置**
   - 在您的仓库页面，点击顶部的 **"Settings"** 标签

2. **找到 Pages 设置**
   - 在左侧菜单中向下滚动，找到 **"Pages"**（在 "Code and automation" 部分）
   - 点击进入 Pages 设置页面

3. **配置 Pages**
   - 在 **"Build and deployment"** 部分：
     - **Source**: 选择 `Deploy from a branch`
     - **Branch**: 选择 `main` 分支（或 `master`，取决于您的设置）
     - 文件夹选择 `/ (root)`
   - 点击 **"Save"** 按钮

4. **等待部署**
   - 保存后，页面顶部会显示："Your site is live at https://..."
   - 通常需要 2-5 分钟部署时间
   - 刷新页面查看状态，当看到绿色的 "✔️" 和网址时表示部署成功！

## 第五步：访问您的网站

部署成功后，您的网站地址将是：
```
https://您的GitHub用户名.github.io/您的仓库名/
```

例如：
- GitHub 用户名：`zhangsan`
- 仓库名：`easi-scorad-calculator`
- 网址：`https://zhangsan.github.io/easi-scorad-calculator/`

## 常见问题

### Q: 部署后页面显示 404？
A: 
- 检查是否等待了足够的时间（2-5分钟）
- 确认 `index.html` 在仓库根目录
- 尝试访问 `https://您的用户名.github.io/您的仓库名/index.html`

### Q: 如何更新网站？
A:
- 在 GitHub 仓库中直接修改文件，提交后会自动重新部署
- 或者本地修改后重新上传/推送

### Q: 可以使用自定义域名吗？
A:
- 可以！在 Pages 设置页面的 "Custom domain" 部分添加您的域名
- 然后在域名 DNS 提供商处添加 CNAME 记录

### Q: 网站不安全（没有 HTTPS）？
A:
- GitHub Pages 默认提供免费 HTTPS
- 在 Pages 设置中勾选 "Enforce HTTPS"

## 项目已配置

✅ 默认语言：中文
✅ 所有翻译已完成
✅ 支持所有评分功能

---

祝您部署顺利！🎉
