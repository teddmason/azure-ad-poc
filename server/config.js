const joi = require('joi')

// Define config schema
const schema = {
  port: joi.number().default(3000),
  env: joi.string().valid('development', 'test', 'production').default('development'),
  adClientId: joi.string(),
  adClientSecret: joi.string(),
  adTenant: joi.string(),
  cookiePassword: joi.string(),
  isSecure: joi.boolean()
}

// Build config
const config = {
  port: process.env.PORT,
  env: process.env.NODE_ENV,
  adClientId: process.env.AD_CLIENT_ID,
  adClientSecret: process.env.AD_CLIENT_SECRET,
  adTenant: process.env.AD_TENANT,
  cookiePassword: process.env.AD_COOKIE_PASSWORD,
  isSecure: process.env.IS_SECURE
}

// Validate config
const result = joi.validate(config, schema, {
  abortEarly: false
})

// Throw if config is invalid
if (result.error) {
  throw new Error(`The server config is invalid. ${result.error.message}`)
}

// Use the joi validated value
const value = result.value

// Add some helper props
value.isDev = value.env === 'development'
value.isProd = value.env === 'production'

module.exports = value
