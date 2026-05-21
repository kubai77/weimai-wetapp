'use strict'
module.exports = {
  NODE_ENV: '"production"',
  API_BASE_URL: JSON.stringify(process.env.API_BASE_URL || 'https://mokespace.cn/weimai'),
  API_ASSET_BASE_URL: JSON.stringify(process.env.API_ASSET_BASE_URL || process.env.API_BASE_URL || 'https://mokespace.cn/weimai')
}
