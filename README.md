# Strategy FrtBySl 
This appears to be a TradingView Pine script for a trading strategy called "Strategy FrtBySl." 

The strategy uses the `strategy` function to set parameters such as the name of the strategy, whether it should be overlaid on the chart, and the default quantity type and value. The `strategy.risk.max_intraday_loss` function is used to set a maximum intraday loss as a percentage of equity.

The script then uses an `if` statement to check if the current candle is a bullish reversal (close > open and open > close[1]) or a bearish reversal (close < open and open < close[1]). If a bullish reversal occurs, the script enters a long position with `strategy.entry`. If a bearish reversal occurs, the script enters a short position.

Finally, there is a commented-out alert message using `{{placeholders}}` to display information about the current trade.
