5import time, json, requests
#timestamp is a dummy get system time
#clean this code up

dbparams=["timestamp:'1',",'avgprice:','bid:','ask:','volume:']
apiparams=['high','low','bid','ask','volume']
dataList=[]
s="{"+dbparams[0]
hitBitTick = requests.get("https://hitbtc.com/api/1/public/USDBTC/ticker")
counter=1
high=0
flag=True
#REALLY CLEAN THIS UP
for i in apiparams:
    temp=str(hitBitTick.json()['USD'][i])

    if i=="high":
        high=tem
        flag=False
    #getting the average bitcoin price
    elif i=='low':
        temp=str((float(high)+float(temp))/2)
        flag=True
    if i=='volume_btc':
        temp=temp[0:temp.index('.')]
    s=s+dbparams[counter]+temp
    else:
        s=s+", "
    if flag:
        counter=counter+1
s=s+"}"
print s


