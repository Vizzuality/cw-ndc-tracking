ActiveAdmin.register User do
  config.clear_action_items!

  permit_params do
    params = [
      :email, :first_name, :last_name, :password, :password_confirmation
    ]
    params += [:is_admin, :country_iso_code] if current_user.is_admin?
    params
  end

  index do
    selectable_column
    id_column
    column :is_admin
    column :country_iso_code
    column :email
    column :first_name
    column :last_name
    actions
  end

  filter :is_admin
  filter :country_iso_code

  form do |f|
    f.inputs 'User Details' do
      if current_user.is_admin?
        f.input :is_admin
        f.input :country_iso_code
      end
      f.input :email
      f.input :first_name, as: :string
      f.input :last_name, as: :string
    end
    f.submit
  end

  controller do
    def update
      update! do |format|
        format.html { redirect_to edit_admin_user_path(@user) }
      end
    end
  end
end
