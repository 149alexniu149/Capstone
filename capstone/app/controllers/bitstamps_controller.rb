class BitstampsController < ApplicationController
  before_action :set_bitstamp, only: [:show, :edit, :update, :destroy]

  # GET /bitstamps
  # GET /bitstamps.json
  def index
    @bitstamps = Bitstamp.all
  end

  # GET /bitstamps/1
  # GET /bitstamps/1.json
  def show
  end

  # GET /bitstamps/new
  def new
    @bitstamp = Bitstamp.new
  end

  # GET /bitstamps/1/edit
  def edit
  end

  # POST /bitstamps
  # POST /bitstamps.json
  def create
    @bitstamp = Bitstamp.new(bitstamp_params)

    respond_to do |format|
      if @bitstamp.save
        format.html { redirect_to @bitstamp, notice: 'Bitstamp was successfully created.' }
        format.json { render :show, status: :created, location: @bitstamp }
      else
        format.html { render :new }
        format.json { render json: @bitstamp.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /bitstamps/1
  # PATCH/PUT /bitstamps/1.json
  def update
    respond_to do |format|
      if @bitstamp.update(bitstamp_params)
        format.html { redirect_to @bitstamp, notice: 'Bitstamp was successfully updated.' }
        format.json { render :show, status: :ok, location: @bitstamp }
      else
        format.html { render :edit }
        format.json { render json: @bitstamp.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /bitstamps/1
  # DELETE /bitstamps/1.json
  def destroy
    @bitstamp.destroy
    respond_to do |format|
      format.html { redirect_to bitstamps_url, notice: 'Bitstamp was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_bitstamp
      @bitstamp = Bitstamp.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def bitstamp_params
      params.require(:bitstamp).permit(:timestamp, :avgprice, :bid, :ask, :volume)
    end
end
