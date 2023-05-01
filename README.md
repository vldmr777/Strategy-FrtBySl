# Strategy FrtBySl 
![](https://user-images.githubusercontent.com/82644207/235460263-ff4d6189-b676-4b5a-90bb-55746aedec0e.png)
```
//@version=5
```

This line specifies the version of Pine script being used. In this case, it is version 5.

```
strategy("Strategy FrtBySl", overlay=true, default_qty_type = strategy.percent_of_equity, default_qty_value = 10)
```

This line creates a new trading strategy called "Strategy FrtBySl" using the `strategy` function. The `overlay` parameter is set to `true`, which means the strategy will be overlaid on the chart. The `default_qty_type` parameter is set to `strategy.percent_of_equity`, which means the position size will be a percentage of the account's equity. The `default_qty_value` parameter is set to 10, which means the position size will be 10% of the account's equity by default.

```
maxIdLossPcnt = input.float(1, "Max Intraday Loss(%)")
strategy.risk.max_intraday_loss(maxIdLossPcnt, strategy.percent_of_equity)
```

These lines set a maximum intraday loss as a percentage of equity using the `strategy.risk.max_intraday_loss` function. The `input.float` function is used to create a floating-point input variable called `maxIdLossPcnt`, which will be used to set the maximum loss percentage. The default value of `maxIdLossPcnt` is 1, and the label for the input variable is "Max Intraday Loss(%)". 

```
if (close > open and open > close[1])
	strategy.entry("Fbuy", strategy.long)
if (close < open and open < close[1])
	strategy.entry("Fsell", strategy.short)
```

These lines use an `if` statement to check if the current candle is a bullish reversal (close > open and open > close[1]) or a bearish reversal (close < open and open < close[1]). If a bullish reversal occurs, the script enters a long position with `strategy.entry("Fbuy", strategy.long)`. If a bearish reversal occurs, the script enters a short position with `strategy.entry("Fsell", strategy.short)`.

```
//Alert for Strategy FrtBySl:
//Strategy FrtBySl: {{strategy.order.action}} @{{ticker}}·{{exchange}}. Current price: {{close}}
```

These lines are commented out and provide a message template for an alert that can be triggered when a trade is made using this strategy. The message will display information about the order action (buy or sell), the ticker symbol, the exchange, and the current price. This message can be customized and used with the `alertcondition` function to trigger an alert when a trade is made.

Overall, this script creates a simple trading strategy that looks for bullish and bearish reversals and enters long or short positions accordingly. The maximum intraday loss is limited as a percentage of equity, and there is an option to trigger an alert when a trade is made.
