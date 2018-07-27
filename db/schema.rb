# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180727153843) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "categories", force: :cascade do |t|
    t.bigint "report_id", null: false
    t.text "section_slug", null: false
    t.text "slug", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["report_id", "section_slug", "slug"], name: "categories_report_id_section_slug_slug_key", unique: true
    t.index ["report_id"], name: "index_categories_on_report_id"
  end

  create_table "indicators", force: :cascade do |t|
    t.bigint "target_id", null: false
    t.text "slug", null: false
    t.json "values"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["target_id", "slug"], name: "indicators_target_id_slug_key", unique: true
    t.index ["target_id"], name: "index_indicators_on_target_id"
  end

  create_table "reports", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id", null: false
    t.index ["user_id"], name: "index_reports_on_user_id"
  end

  create_table "targets", force: :cascade do |t|
    t.bigint "category_id", null: false
    t.text "slug", null: false
    t.integer "year", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["category_id", "slug", "year"], name: "targets_category_id_slug_year_key", unique: true
    t.index ["category_id"], name: "index_targets_on_category_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.boolean "is_admin", default: false, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.string "country_iso_code", limit: 3, default: "XXX", null: false
    t.string "authentication_token", limit: 30
    t.text "first_name", null: false
    t.text "last_name", null: false
    t.index ["authentication_token"], name: "index_users_on_authentication_token", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "categories", "reports", on_delete: :cascade
  add_foreign_key "indicators", "targets", on_delete: :cascade
  add_foreign_key "targets", "categories", on_delete: :cascade
end
