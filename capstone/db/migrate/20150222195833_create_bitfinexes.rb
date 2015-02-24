class CreateBitfinexes < ActiveRecord::Migration
  def change
    create_table :bitfinexes do |t|
      t.string :timestamp
      t.float :avgprice
      t.float :bid
      t.float :ask
      t.integer :volume

      t.timestamps null: false
    end
  end
end
