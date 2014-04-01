# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :time_scheduled do
    start_time_slot "2014-03-31 23:25:38"
    end_time_slot "2014-03-31 23:25:38"
    periodicity "MyString"
    direction "MyString"
  end
end
