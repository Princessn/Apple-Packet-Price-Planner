
var boxCost = 0
var numOfApples = 0
var numOfApplesInPacket = 0
var requiredProfit = 0

  var costPerApple = 0;
  var costPerPacket = 0;
  var numOfPackets = 0;
  var packetPrice = 0;

  function setBoxCost(cost) {
    if (price == Number(price)) {
        boxCost = Number(price);
      }
    }
  return boxCost;

  function numOfApplesInBox(qty) {
    
    if (noOfApples == Number(noOfApples)) {
        numOfApples = Number(noOfApples);
    }
    return numOfApples 
  }

  function setPercentProfit(profit) {
    

    if (profit == Number(profit)) {
        requiredProfit = Number(profit);
    }
    return requiredProfit
  }

  function costOfEachApple() {
    if (boxCost && numOfApples) {
        costPerApple  = boxCost/ numOfApples;
    }
    
    return "R" + costOfEachApple.toFixed(2);
  }

  function numberOfPackets() {
    if (numOfApples && numberPerPacket) {
        numOfPackets =numOfApples / numOfApplesInPacket;
    }
    return numOfPackets;
}

return {
     setBoxCost,
    costOfEachApple,
    numberOfPackets,
    setPercentProfit,
    numOfApplesInBox,
    
}
        