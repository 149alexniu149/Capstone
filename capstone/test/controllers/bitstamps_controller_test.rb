require 'test_helper'

class BitstampsControllerTest < ActionController::TestCase
  setup do
    @bitstamp = bitstamps(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:bitstamps)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create bitstamp" do
    assert_difference('Bitstamp.count') do
      post :create, bitstamp: { ask: @bitstamp.ask, avgprice: @bitstamp.avgprice, bid: @bitstamp.bid, timestamp: @bitstamp.timestamp, volume: @bitstamp.volume }
    end

    assert_redirected_to bitstamp_path(assigns(:bitstamp))
  end

  test "should show bitstamp" do
    get :show, id: @bitstamp
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @bitstamp
    assert_response :success
  end

  test "should update bitstamp" do
    patch :update, id: @bitstamp, bitstamp: { ask: @bitstamp.ask, avgprice: @bitstamp.avgprice, bid: @bitstamp.bid, timestamp: @bitstamp.timestamp, volume: @bitstamp.volume }
    assert_redirected_to bitstamp_path(assigns(:bitstamp))
  end

  test "should destroy bitstamp" do
    assert_difference('Bitstamp.count', -1) do
      delete :destroy, id: @bitstamp
    end

    assert_redirected_to bitstamps_path
  end
end
