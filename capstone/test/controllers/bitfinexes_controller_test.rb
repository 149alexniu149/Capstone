require 'test_helper'

class BitfinexesControllerTest < ActionController::TestCase
  setup do
    @bitfinex = bitfinexes(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:bitfinexes)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create bitfinex" do
    assert_difference('Bitfinex.count') do
      post :create, bitfinex: { ask: @bitfinex.ask, avgprice: @bitfinex.avgprice, bid: @bitfinex.bid, timestamp: @bitfinex.timestamp, volume: @bitfinex.volume }
    end

    assert_redirected_to bitfinex_path(assigns(:bitfinex))
  end

  test "should show bitfinex" do
    get :show, id: @bitfinex
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @bitfinex
    assert_response :success
  end

  test "should update bitfinex" do
    patch :update, id: @bitfinex, bitfinex: { ask: @bitfinex.ask, avgprice: @bitfinex.avgprice, bid: @bitfinex.bid, timestamp: @bitfinex.timestamp, volume: @bitfinex.volume }
    assert_redirected_to bitfinex_path(assigns(:bitfinex))
  end

  test "should destroy bitfinex" do
    assert_difference('Bitfinex.count', -1) do
      delete :destroy, id: @bitfinex
    end

    assert_redirected_to bitfinexes_path
  end
end
