import time, json, requests

params=['vwap','bid','ask','volume']
bitStampTick = requests.get('https://www.bitstamp.net/api/ticker/')
dataList=[]
for i in params:
    dataList.append(bitStampTick.json()[i])
print dataList

