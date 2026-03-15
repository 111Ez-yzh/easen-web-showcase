# 部署到 Vercel 步骤说明

## 前提条件
- 拥有 Vercel 账号
- 已安装 Git
- 项目已初始化并构建成功

## 部署步骤

### 1. 初始化 Git 仓库
```bash
# 初始化 Git 仓库
git init

# 添加所有文件
git add .

# 提交初始版本
git commit -m "Initial commit"
```

### 2. 登录 Vercel
- 访问 [Vercel 官网](https://vercel.com)
- 登录或注册账号

### 3. 导入项目
- 点击 "New Project" 按钮
- 选择 "Import Git Repository"
- 选择你的 Git 仓库
- 点击 "Import"

### 4. 配置项目
- 项目名称：保持默认或自定义
- 构建命令：`npm run build`
- 输出目录：`dist`
- 环境变量：无需特殊配置
- 点击 "Deploy"

### 5. 部署完成
- 等待部署完成
- 获得部署后的 URL

## 后续更新
当你对项目进行修改后，只需：
```bash
# 添加更改
git add .

# 提交更改
git commit -m "Update: 描述你的更改"

# 推送到远程仓库
git push
```

Vercel 会自动检测到更改并重新部署项目。

## 项目结构说明
- `src/` - 源代码目录
  - `App.jsx` - 主应用组件
  - `index.css` - 全局样式
  - `main.jsx` - 应用入口
- `public/` - 静态资源目录
- `vercel.json` - Vercel 配置文件
- `tailwind.config.js` - Tailwind CSS 配置
- `postcss.config.js` - PostCSS 配置
- `vite.config.js` - Vite 配置

## 注意事项
- 确保 `npm run build` 命令能够成功执行
- 如需修改游戏链接或其他外部资源，直接编辑 `App.jsx` 文件中的对应部分
- 如需更新个人信息，修改 `App.jsx` 中的相应内容
