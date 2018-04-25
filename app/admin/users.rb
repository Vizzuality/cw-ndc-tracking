ActiveAdmin.register User do
  config.clear_action_items!

  permit_params do
    params = [:email, :name, :password, :password_confirmation]
    params += [:is_admin, :country_iso_code] if current_user.is_admin?
    params
  end

  index do
    selectable_column
    id_column
    column :is_admin
    column :country_iso_code
    column :email
    column :name
    column :invitation_sent_at
    column :invitation_accepted_at
    actions
  end

  filter :is_admin
  filter :country_iso_code
  filter :invitation_sent_at

  form do |f|
    f.inputs "User Details" do
      if current_user.is_admin?
        f.input :is_admin
        f.input :country_iso_code
      end
      f.input :email
      f.input :name
      f.input :password
      f.input :password_confirmation
    end
    f.submit
  end

  action_item :new_invitation do
    link_to 'Invite New User', new_invitation_admin_users_path
  end

  collection_action :new_invitation do
    @user = User.new
  end

  collection_action :send_invitation, method: :post do
    flash[:success] = 'User has been successfully invited.' if User.invite!(params[:user].permit!)
    redirect_to admin_users_path
  end

end
