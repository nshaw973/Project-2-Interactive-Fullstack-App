//Auth helper function. for authenticating the user to make sure they are logged in to prevent them
//from going into pages they are FORBIDDEN from
const withAuth = (req, res, next) => {
  console.log('req.session', req.session)
    if (!req.session.loggedIn) {
    //Not logged in? SEND THEM TO THE LOGIN PAGE
      res.redirect('/login');
    } else {
    //logged in? Continue
      next();
    }
  };
  
  module.exports = withAuth;