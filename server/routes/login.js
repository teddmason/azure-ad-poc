module.exports = {
  method: 'GET',
  path: '/login',
  options: {
    auth: 'azuread',
    handler: (request, h) => {
      if (!request.auth.isAuthenticated) {
        return `Authentication failed due to: ${request.auth.error.message}`
      }

      request.cookieAuth.set({
        profile: request.auth.credentials.profile
      })

      return h.redirect('/')
    }
  }
}
