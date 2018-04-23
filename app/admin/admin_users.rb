ActiveAdmin.register AdminUser do
  permit_params :email, :name, :password, :password_confirmation

  index do
    selectable_column
    id_column
    column :email
    column :name
    actions
  end

  config.filters = false

  form do |f|
    f.inputs "Admin Details" do
      f.input :email
      f.input :name
      f.input :password
      f.input :password_confirmation
    end
    f.submit
  end
end
