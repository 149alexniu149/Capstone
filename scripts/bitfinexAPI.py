# Python 2.7.6. WBN Calling exchange APIs. 
import time, json, requests
#timestamp is a dummy get system time
#clean this code up
dbparams=["timestamp:'1',",'avgprice:','bid:','ask:','volume:']
apiparams=['mid','bid','ask','volume']
dataList=[]
s="{"+dbparams[0]
bitFinexTick = requests.get("https://api.bitfinex.com/v1/pubticker/btcusd")
counter=1
for i in apiparams:
    temp=str(bitFinexTick.json()[i])
    if i=='volume':
        temp=temp[0:temp.index('.')]
    s=s+dbparams[counter]+temp
    if i!='volume':
        s=s+", "
    counter=counter+1
s=s+"}"
print s

def pull():
	dbparams=["timestamp: '1', ",'avgprice: ','bid: ','ask: ','volume: ']
	apiparams=['mid','bid','ask','volume']
	dataList=[]
	s="{"+dbparams[0]
	bitFinexTick = requests.get("https://api.bitfinex.com/v1/pubticker/btcusd")
	counter=1
	for i in apiparams:
		temp=str(bitFinexTick.json()[i])
		if i=='volume':
			temp=temp[0:temp.index('.')]
		s=s+dbparams[counter]+temp
		if i!='volume':
			s=s+", "
		counter=counter+1
	s=s+"}"
	return s
pull()


