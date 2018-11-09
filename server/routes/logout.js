module.exports = {
  method: 'GET',
  path: '/logout',
  options: {
    handler: function (request, h) {
      request.cookieAuth.clear()
      return h.redirect('https://login.microsoftonline.com/526e1181-9d1f-4f48-bbed-4b0d2f09c645/oauth2/v2.0/logout?post_logout_redirect_uri=http://localhost:3000')
    }
  }
}
