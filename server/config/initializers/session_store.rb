if Rails.env === 'production'
  Rails.application.config.session_store :cookie_store, key: '_level9000', domain: 'server'
else
  Rails.application.config.session_store :cookie_store, key: '_level9000'
end
