import time, json, requests

dbparams=["timestamp:'1',",'avgprice:','bid:','ask:','volume:']
apiparams=['avg','buy','sell','vol']
dataList=[]
s="{"+dbparams[0]
anxTick = requests.get("https://anxpro.com/api/2/BTCUSD/money/ticker")
counter=1
for i in apiparams:
    #due to api format, the values are stored in 'data' and the 'value'
    #is what we need
    temp=str(anxTick.json()['data'][i]['value'])
    if i=='vol':
        temp=temp[0:temp.index('.')]
    s=s+dbparams[counter]+temp
    if i!='volume':
        s=s+", "
    counter=counter+1
s=s+"}"
print s
