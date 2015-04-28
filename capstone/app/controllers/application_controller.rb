class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  
  helper_method :runExchanges
  
  def runExchanges
		
		#puts "--------------------------Running Exchanges---------------------------"
		bitfinThread=Thread.new{getBitfinex()}
		bitstThread=Thread.new{getBitstamp()}
		
		bitfinThread.join()
		bitstThread.join()
		
  end
end

def getBitfinex

	while true
		#puts "------------------------Bitfinex New---------------------------------" 
		newdata =`python C:\\Users\\Evan\\Documents\\Github\\Capstone\\scripts\\bitfinexAPI.py`
		
		@bitfinex = Bitfinex.new(eval(newdata))
		@bitfinex.save
			
		sleep(10)
	end
end

def getBitstamp
	while true 
		#puts "-----------------------------Bitstamp New---------------------------"
		newdata =`python C:\\Users\\Evan\\Documents\\Github\\Capstone\\scripts\\bitstampAPI.py`
		
		@bitstamp = Bitstamp.new(eval(newdata))
		@bitstamp.save
		
		sleep(10)
	end
end

def getLast

	record=Bitstamp.last
	puts "-------------------------TEST--------------------------"
	return record
end