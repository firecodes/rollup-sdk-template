# 技术
 内置 rollup + ts

## Installation
Clone this repo and npm install.

```bash
npm i --force
```

### Production build

```bash
npm run build
```

### gulp 

```bash
npm run server
npm run build:examples
```


### 打包项目对比参考 (感谢)
1.  https://github.com/socketio/socket.io-client
2.  https://github.com/dvgis/dc-sdk

# prettier 格式化所有文件
  prettier --write .
  prettier --write app/
  prettier --write \"*.js\" \"lib/**/*.ts\"
  
# prettier 检查文件是否已经格式化
  prettier --check .
  prettier --check app/
  prettier --check \"*.js\" \"lib/**/*.ts\"




