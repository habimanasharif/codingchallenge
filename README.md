# Coding Challenge

## install dependences
``` npm install ```
## create Army
 1. Using npm
```npm start create 300 spearmen swordsmen archers```
2. using Docker
  1. first create an image
     ``` docker build -t createarmy . ```
  2. run docker image
     ```ocker run createarmy ./bin/app.js -n create 400 swordsman spearsmen```

### example
1. 
Command
```bash
npm start create 200 spearmen swordsmen gunsmen
```
output 
```json
[
  { troopName: 'spearmen', troopNumber: 85 },
  { troopName: 'swordsmen', troopNumber: 3 },
  { troopName: 'gunsmen', troopNumber: 112 }
]
```
2. 
Command
```bash
npm start create 500 spearmen swordsmen gunsmens archers
```
output 
```json
[
  { troopName: 'spearmen', troopNumber: 141 },
  { troopName: 'swordsmen', troopNumber: 285 },
  { troopName: 'gunsmens', troopNumber: 43 },
  { troopName: 'archers', troopNumber: 31 }
]
```


### Run test
```npm test```

