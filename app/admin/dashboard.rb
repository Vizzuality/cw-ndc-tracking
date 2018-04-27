ActiveAdmin.register_page 'Dashboard' do
  menu priority: 1, label: proc { I18n.t('active_admin.dashboard') }

  content title: proc { I18n.t('active_admin.dashboard') } do
    columns do
      column do
        panel 'Links' do
          ul do
            li link_to('Profile', edit_user_registration_path)
          end
        end
      end

      column do
        panel 'Info' do
          para 'Welcome to NDC Tracker.'
        end
      end
    end
  end
end
