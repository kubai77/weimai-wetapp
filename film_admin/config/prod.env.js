'use strict'
module.exports = {
  NODE_ENV: '"production"',
  VUE_APP_API_BASE_URL: JSON.stringify(process.env.VUE_APP_API_BASE_URL || 'https://mokespace.cn/weimai')
}
