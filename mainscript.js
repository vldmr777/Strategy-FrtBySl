//@version=5
strategy("Strategy FrtBySl", overlay=true, default_qty_type = strategy.percent_of_equity, default_qty_value = 10)
maxIdLossPcnt = input.float(1, "Max Intraday Loss(%)")
strategy.risk.max_intraday_loss(maxIdLossPcnt, strategy.percent_of_equity)
if (close > open and open > close[1])
	strategy.entry("Fbuy", strategy.long)
if (close < open and open < close[1])
	strategy.entry("Fsell", strategy.short)

//Alert for Strategy FrtBySl:
//Strategy FrtBySl: {{strategy.order.action}} @{{ticker}}·{{exchange}}. Current price: {{close}}
//1
