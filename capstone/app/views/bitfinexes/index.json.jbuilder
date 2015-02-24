json.array!(@bitfinexes) do |bitfinex|
  json.extract! bitfinex, :id, :timestamp, :avgprice, :bid, :ask, :volume
  json.url bitfinex_url(bitfinex, format: :json)
end
