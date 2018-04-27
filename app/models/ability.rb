class Ability
  include CanCan::Ability

  def initialize(user)
    if user.is_admin?
      can :manage, :all
    else
      can [:show, :edit, :update], User, id: user.id
    end
    can :read, ActiveAdmin::Page, name: 'Dashboard', namespace_name: 'admin'
  end
end
