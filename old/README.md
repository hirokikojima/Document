# Readme

## Github Pages
https://hirokikojima.github.io/

## Docker

### build
```
docker build -t jekyll/hirokikojima.github.io:latest .
```

### run
```
docker run --rm -v %cd%:/srv/jekyll -p 4000:4000 -it  jekyll/hirokikojima.github.io:latest jekyll serve --watch
```

## Jekyll

### build
```
jekyll build
```