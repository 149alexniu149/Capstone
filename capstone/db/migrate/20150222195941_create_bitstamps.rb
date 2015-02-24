class CreateBitstamps < ActiveRecord::Migration
  def change
    create_table :bitstamps do |t|
      t.string :timestamp
      t.float :avgprice
      t.float :bid
      t.float :ask
      t.integer :volume

      t.timestamps null: false
    end
  end
end
