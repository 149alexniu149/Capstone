import time, json, requests

dbparams=["timestamp:'1',",'avgprice:','bid:','ask:','volume:']
apiparams=['vwap','bid','ask','volume']
bitStampTick = requests.get('https://www.bitstamp.net/api/ticker/')
dataList=[]
counter=1
s="{"+dbparams[0]
for i in apiparams:
    temp=str(bitStampTick.json()[i])
    print temp
    if i=='volume':
        temp=temp[0:temp.index('.')]
    s=s+dbparams[counter]+temp
    if i!='volume':
        s=s+", "
    counter=counter+1
s=s+"}"
print s

