#!/bin/bash

# switch to script dir
cd "$(dirname "$0")"

npm i -g npm
npm i -g typescript
npm install --save-dev jest @types/jest ts-jest typescript
npm install -D @types/angular
npm install -D @types/requirejs
npm install -D @types/jquery
npm install -g jest