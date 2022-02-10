Events.on(WorldLoadEvent, () => {
    UnitTypes.crawler.canBoost = true
    UnitTypes.crawler.boostMultiplier = 10.0
    UnitTypes.crawler.commandLimit = 32
})
