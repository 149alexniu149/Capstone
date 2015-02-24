# Python 2.7.6. WBN Calling exchange APIs. 
import time, json, requests

#'timestamp','avgprice','bid','ask','volume'

params=['mid','bid','ask','volume']
dataList=[]
bitFinexTick = requests.get("https://api.bitfinex.com/v1/pubticker/btcusd")
for i in params:
    temp=bitFinexTick.json()[i]
    dataList.append(temp)
print dataList


