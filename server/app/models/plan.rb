class Plan < ApplicationRecord
  mount_uploader :image, ProductImageUploader
end
