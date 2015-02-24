json.array!(@bitstamps) do |bitstamp|
  json.extract! bitstamp, :id, :timestamp, :avgprice, :bid, :ask, :volume
  json.url bitstamp_url(bitstamp, format: :json)
end
