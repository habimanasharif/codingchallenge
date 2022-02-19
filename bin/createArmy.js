const army=(max,units)=>{
    let troop={
        troopName:null,
        troopNumber:null
    }
    if(max===0||isNaN(max)){
        
        return("You can't create an army of 0 soldiers")
    }
    if(units.length<=1)
    {
     return("Your army must contain altleast one troop")
    }
    let rem=max
    let troopsArray=[]
    let total=0
    for(let i=1;i<units.length;i++){
        if(i===units.length-1){
            troop={
                troopName:units[i],
                troopNumber:max-total
            } 
        }
        else{
     troop={
         troopName:units[i],
         troopNumber:Math.floor((Math.random() * rem)+1)
     } 
    }
     rem=rem-troop.troopNumber
     total=total+troop.troopNumber
     troopsArray[i-1]=troop
    }
    return troopsArray
}

exports.army =army