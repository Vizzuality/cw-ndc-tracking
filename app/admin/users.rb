ActiveAdmin.register User do
  config.clear_action_items!

  permit_params do
    params = [
      :email, :first_name, :last_name, :password, :password_confirmation
    ]
    params += [:status, :country_iso_code] if current_user.is_admin?
    params
  end

  index do
    selectable_column
    id_column
    column :first_name
    column :last_name
    column :email
    column :country_iso_code
    column :status
    actions
  end

  filter :status, as: :select
  filter :country_iso_code, as: :select

  form do |f|
    f.inputs 'User Details' do
      f.input :first_name, as: :string
      f.input :last_name, as: :string
      f.input :email
      f.input :country_iso_code if current_user.is_admin?
      f.input :status, as: :select, collection: User::STATUSES if current_user.is_admin?
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

  show do
    attributes_table do
      row :first_name
      row :last_name
      row :email
      row :country_iso_code
      row :status
    end
  end
end
