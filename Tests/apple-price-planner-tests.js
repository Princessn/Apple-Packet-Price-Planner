describe('Apple Packet Price Planner', function() {
    it('it should set the cost of each box',  function() {
        
        let applePricePlanner = ApplePricePlanner()
        applePricePlanner.setBoxCost(100)
        assert.equal(100, applePricePlanner.getBoxCost())
})
    
    it('it should set number of apples per box', function() {

        let applePricePlanner = ApplePricePlanner()
        applePricePlanner.numOfApples(120)
        assert.equal(120, applePricePlanner.numOfApples())
})

    it('it should set number of apples per packet', function() {
        let applePricePlanner = ApplePricePlanner()
        applePricePlanner.numOfApplesInPacket(4)
        assert.equal(4, applePricePlanner.numOfApplesInPacket())
})

    it('it should set required profit', function() {
        let applePricePlanner = ApplePricePlanner()
        applePricePlanner.requiredProfit(20)
        assert.equal(20, applePricePlanner.requiredProfit())
})

    //apple price calculations
    it('it should calculate number of packets', function() {

    })
    it('it should set the price cost per apple', function() {

    })
    it('it should set the packet cost price', function() {

    })
    it('it should get the required profit', function() {

    })

})
