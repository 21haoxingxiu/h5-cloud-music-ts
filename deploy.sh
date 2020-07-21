###
 # @Description: new file
 # @Autor: zhan
 # @Date: 2020-07-20 14:07:55
 # @LastEditors: zhan
 # @LastEditTime: 2020-07-21 19:19:28
### 
# 当发生错误时中止脚本
set -e

# 构建
npm run build

# cd 到构建输出的目录下 
# cd build

# 部署到自定义域名，没有自定义域名可注释掉
# echo 'clearlove666.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 部署到 https://<USERNAME>.github.io
# git push -f https://github.com/21haoxingxiu/h5-cloud-music-ts.git gh-pages
git subtree push --prefix=build origin gh-pages

cd -