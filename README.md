# Coding Challenge

## install dependences
``` npm install ```
## create Army
```npm start create 300 spearmen swordsmen archers```

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
1. 
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

