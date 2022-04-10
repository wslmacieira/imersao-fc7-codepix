#!/bin/bash

# rm -rf node_modules
# rm -f package-lock.json
# npm install webpack
npm install
npm run typeorm migration: run
npm run console fixtures
npm run start:dev