import time, json, requests

dbparams=["timestamp:'1',",'avgprice:','bid:','ask:','volume:']
apiparams=['avg','buy','sell','vol']

s="{"+dbparams[0]
btceTick = requests.get('https://btc-e.com/api/2/btc_usd/ticker')
counter=1
for i in apiparams:
    temp=str(btceTick.json()["ticker"][i])
    if i=='vol':
        temp=temp[0:temp.index('.')]
    s=s+dbparams[counter]+temp
    if i!='vol':
        s=s+", "
    counter=counter+1
s=s+"}"
print s
