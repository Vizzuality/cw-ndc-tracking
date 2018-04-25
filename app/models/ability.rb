class Ability
  include CanCan::Ability

  def initialize(user)
    can :manage, :all if user.is_admin?
    can :manage, User, id: user.id
    can :read, ActiveAdmin::Page, name: 'Dashboard', namespace_name: 'admin'
  end
end
