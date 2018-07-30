ActiveAdmin.register User do
  config.clear_action_items!

  permit_params do
    params = [
      :first_name,
      :last_name,
      :email,
      :country_iso_code,
      :organisation,
      :sector,
      :data_usage,
      :tester,
      :password,
      :password_confirmation
    ]
    params += [:status] if current_user.is_admin?
    params
  end

  index do
    selectable_column
    id_column
    column :first_name
    column :last_name
    column :email
    column :country_iso_code
    column :organisation
    column :sector
    column :data_usage
    column :tester
    column :status
    actions
  end

  filter :status, as: :select
  filter :country_iso_code, as: :select
  filter :organisation, as: :select
  filter :sector, as: :select
  filter :tester

  form do |f|
    f.inputs 'User Details' do
      f.input :first_name, as: :string
      f.input :last_name, as: :string
      f.input :email
      f.input :country_iso_code
      f.input :organisation, as: :string
      f.input :sector, as: :string
      f.input :data_usage
      f.input :tester
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
      row :organisation
      row :sector
      row :data_usage
      row :tester
      row :status
    end
  end
end
