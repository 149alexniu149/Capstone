class BitfinexesController < ApplicationController
  before_action :set_bitfinex, only: [:show, :edit, :update, :destroy]

  # GET /bitfinexes
  # GET /bitfinexes.json
  public
	  def index
		@bitfinexes = Bitfinex.all
		puts "------------------------Update Done---------------------------------" 

	  end

	  # GET /bitfinexes/1
	  # GET /bitfinexes/1.json
	  def show
	  end

	  # GET /bitfinexes/new
	  def new
			sleep(1)
			i=0
			while i < 5
				i=i+1
				#@bitfinex = Bitfinex.new
				puts "-----------------------------Bitfinex New---------------------------"
				newdata =`python C:\\Users\\Evan\\Documents\\Github\\Capstone\\scripts\\bitfinexAPI.py`
				@bitfinex = Bitfinex.new(eval(newdata))
				@bitfinex.save
				sleep(3)
			end
		end
		"""

		newdata =`python C:\\Users\\Alex\\Documents\\Github\\Capstone\\scripts\\bitfinexAPI.py`
		puts ""------------------------Create Start---------------------------------"" 
		@bitfinex = Bitfinex.new(eval(newdata))

		respond_to do |format|
		  if @bitfinex.save
			format.html { redirect_to @bitfinex, notice: 'Bitfinex was successfully created.' }
			format.json { render :show, status: :created, location: @bitfinex }
		  else
			format.html { render :new }
			format.json { render json: @bitfinex.errors, status: :unprocessable_entity }
		  end
		end """
		
		puts "------------------------Create Done---------------------------------" 
	  end

	  # GET /bitfinexes/1/edit
	  def edit
	  end

	  # POST /bitfinexes
	  # POST /bitfinexes.json
	  def create
		newdata =`python C:\\Users\\Alex\\Documents\\Github\\Capstone\\scripts\\bitfinexAPI.py`
		puts "------------------------Create Start---------------------------------" 
		@bitfinex = Bitfinex.new(eval(newdata))

		respond_to do |format|
		  if @bitfinex.save
			format.html { redirect_to @bitfinex, notice: 'Bitfinex was successfully created.' }
			format.json { render :show, status: :created, location: @bitfinex }
		  else
			format.html { render :new }
			format.json { render json: @bitfinex.errors, status: :unprocessable_entity }
		  end
		end
		puts "------------------------Create Done---------------------------------" 
	  end

	  # PATCH/PUT /bitfinexes/1
	  # PATCH/PUT /bitfinexes/1.json
	  def update
		respond_to do |format|
		  if @bitfinex.update(bitfinex_params)
			format.html { redirect_to @bitfinex, notice: 'Bitfinex was successfully updated.' }
			format.json { render :show, status: :ok, location: @bitfinex }
		  else
			format.html { render :edit }
			format.json { render json: @bitfinex.errors, status: :unprocessable_entity }
		  end
		end
			puts "------------------------Update Done---------------------------------" 
	  end

	  # DELETE /bitfinexes/1
	  # DELETE /bitfinexes/1.json
	  def destroy
		@bitfinex.destroy
		respond_to do |format|
		  format.html { redirect_to bitfinexes_url, notice: 'Bitfinex was successfully destroyed.' }
		  format.json { head :no_content }
		end
			puts "------------------------Destroy Done---------------------------------" 
	  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_bitfinex
      @bitfinex = Bitfinex.find(params[:id])
	  	puts "------------------------Set Done---------------------------------" 
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def bitfinex_params
      params.require(:bitfinex).permit(:timestamp, :avgprice, :bid, :ask, :volume)
	  #return { "timestamp": 1, "avgprice": 3.4, "bid": 4.3, "ask": 9.8, "volume": 12  } 
    end
	
end
