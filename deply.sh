#/bin/sh

if [ "$#" -ne 1 ]; then
   echo "./deploy.sh 'commit message'"
   exit 1
fi

npm run build
rm -r ../jsitor.github.io/static
rm -r ../jsitor.github.io/index.html

cp -r ./dist/* ../jsitor.github.io

cd ../jsitor.github.io

git add .
git commit -m "$1"
git push -u origin master