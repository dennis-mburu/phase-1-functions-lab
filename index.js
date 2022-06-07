// Code your solution in this file!
function distanceFromHqInBlocks (pickUpBlock){
    if (pickUpBlock  >= 42){
        return pickUpBlock - 42
    }
    return 42 - pickUpBlock
}

function distanceFromHqInFeet(pickUpBlock){
    return distanceFromHqInBlocks(pickUpBlock) * 264
}

function distanceTravelledInFeet(startBlock, destinationBlock){
    if (destinationBlock >= startBlock){      
    return (destinationBlock -startBlock) * 264
    }
    return (startBlock - destinationBlock) * 264
}

function calculatesFarePrice(startBlock, destinationBlock){
    if (distanceTravelledInFeet(startBlock, destinationBlock) <= 400){
        return 0
    }
    else if (distanceTravelledInFeet(startBlock, destinationBlock) >400 && distanceTravelledInFeet(startBlock, destinationBlock) <= 2000){
        return (distanceTravelledInFeet(startBlock, destinationBlock) - 400) * 0.02
    }
    else if (distanceTravelledInFeet(startBlock, destinationBlock) >2000 && distanceTravelledInFeet(startBlock, destinationBlock) < 2500){
        //return ((2000-400) * distanceTravelledInFeet(startBlock,destinationBlock) *0.02) + 
        return ((distanceTravelledInFeet(startBlock, destinationBlock) -400 )* 0.25);
    }
    return "cannot travel that far"
    // else if (distanceTravelledInFeet(startBlock, destinationBlock) >2500){
    //     return "cannot travel that far"
    // }
    // elseif (distanceTravelledInFeet(startBlock,destinationBlock) >2000){
    //     return (distanceTravelledInFeet(startBlock, destinationBlock) *0.25)
    // }
    // return (distanceTravelledInFeet(startBlock, destinationBlock)) *0.02
}