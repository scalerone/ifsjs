# ifsjs 贡献指南

- Node.JS >= 16
- PNPM v7

## 1. 本地环境安装试运行

```
# https
git clone https://github.com/scalerone/ifsjs.git

# ssh
git clone git@github.com:scalerone/ifsjs.git

# 进入 ifsjs 目录
cd ifsjs && pnpm install
```

## 2. 贡献流程

- 先查阅[文档](https://scalerone.github.io/ifsjs/)是否有你所需要的`函数方法`；
- 如果没有你想要的`函数方法`，你有两种方式：
  - 发起一个 [issues](https://github.com/scalerone/ifsjs/issues) 讨论，评审人评论`PR Welcome`表示该`idea`可行，然后你就可以 fork 代码开发了；

## 3. 功能开发流程

1. 请先 fork 一份到自己的项目下，然后新建一个分支用于变更

   ![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cf2a51057aa54caebbc48bf434a57498~tplv-k3u1fbpfcp-watermark.image?)

2. 基于 fork 后的项目新建分支，新建功能分支（例如 feature-getDevice）

   ```
   # https
   git clone 你的fork项目 https 地址

   # ssh
   git clone 你的fork项目 ssh 地址

   # 进入 ifsjs 目录
   cd vemjs && pnpm install

   # 新建功能分支
   git checkout -b feature-getDevice
   ```

3. 完成对应函数方法（例如：https://github.com/scalerone/ifsjs/blob/main/packages/core/getDevice/index.ts）
4. 完成对应的测试用例（例如：https://github.com/scalerone/ifsjs/blob/main/packages/core/getDevice/index.test.ts）
5. 完成对应的使用文档（例如：https://github.com/scalerone/ifsjs/blob/main/docs/packages/core/getDevice/index.md）

6. 你可以本地执行一些命令：

   ```
   "scripts": {
       // 本地打包
       "dev": "tsup --watch",
       "build": "tsup",
       // 本地打包文档
       "docs:dev": "pnpm -C docs dev",
       "docs:build": "pnpm run -C docs build",
       // 本地执行eslint prettier检查
       "lint": "eslint . --ext .vue,.js,.ts,.jsx,.tsx,.json --max-warnings 0 --cache",
       "lint:fix": "pnpm run lint --fix",
       "format": "prettier --write --cache .",
       // 执行测试用例
       "test": "vitest test",
       // 测试用例覆盖率
       "coverage": "vitest run --coverage"
     },

   ```

7. 研发完成后需进行相关规则的 commit 检测

   ```
   # 1. 检查代码格式
   pnpm eslint && pnpm format

   # 2. 执行测试用例
   pnpm test

   # 3. 测试用例覆盖率
   pnpm coverage
   ```

8. 以上全部 ok 后，一定要在本地执行 `pnpm change` 生成 `changeset` 文件
   ```
   pnpm change
   ```
9. `Git` 上传：严格遵守 Git Commit 规范

   - 统一格式：

   ```
   <type>(<scope>): <subject>
   // 注意冒号 : 后有空格
   // 如 feat(user): 增加用户中心的 xx 功能
   复制代码
   ```

   - `scope` 表示 commit 的作用范围，如用户中心、购物车中心，也可以是目录名称，一般可以限定几种；

   - `subject` 用于对 commit 进行简短的描述；

   - `type` 必填，表示提交类型，值一般有以下几种：

     - feat：新功能 feature
     - bug：测试反馈 bug 列表中的 bug 号
     - fix： 修复 bug
     - ui：更新 UI；
     - docs： 文档注释变更
     - style： 代码格式(不影响代码运行的变动)；
     - refactor： 重构、优化(既不增加新功能，也不是修复 bug)；
     - perf： 性能优化；
     - release：发布；
     - deploy：部署；
     - test： 增加测试
     - chore： 构建过程或辅助工具的变动
     - revert： 回退
     - build： 打包

## 4. Code Review

- 你 fork 的功能分支提交 PR 合并至`main`分支
- 代码审核与优化
- 审核人`Approved`后合入`main`分支
