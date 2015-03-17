class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  
  helper_method :runExchanges
  
  def runExchanges
		i=0
		while i < 10
			puts "-----------------------------Bitstamp New---------------------------"
			newdata =`python C:\\Users\\Evan\\Documents\\Github\\Capstone\\scripts\\bitstampAPI.py`
			@bitstamp = Bitstamp.new(eval(newdata))
			@bitstamp.save
			
			puts "------------------------Bitfinex New---------------------------------" 
			newdata =`python C:\\Users\\Evan\\Documents\\Github\\Capstone\\scripts\\bitfinexAPI.py`
			@bitfinex = Bitfinex.new(eval(newdata))
			@bitfinex.save
			
			sleep(1)
		end
  end
end
