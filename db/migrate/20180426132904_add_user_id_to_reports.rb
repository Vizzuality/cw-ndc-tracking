class AddUserIdToReports < ActiveRecord::Migration[5.1]
  def change
    Report.delete_all
    add_reference :reports, :user, null: false, index: true
  end
end
