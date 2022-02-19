const { expect } = require('@jest/globals')
const army =require('../bin/createArmy')
const add=(army)=>{
    let sum=0
    for(let i=0;i<army.length;i++){
      sum=sum+army[i].troopNumber
    }
    return sum
}
test("Creates Army Properly",()=>{
  expect(add(army.army(1000,['spearmen','swordsman','archers']))).toStrictEqual(1000)
})
