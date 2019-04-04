const bcrypt = require('bcryptjs')
module.exports = {

  register: async (req, res, next) => {
    const { username, password, email } = req.body
    const { session } = req
    const db = req.app.get('db')
    let existingUsername = await db.auth.check_username({ username })
    existingUsername = +existingUsername[ 0 ].count
    if (existingUsername !== 0) {
      return res.sendStatus(409)
    }
    let salt = bcrypt.genSaltSync(10)
    let hash = bcrypt.hashSync(password, salt)
    let newUser = await db.auth.register({ username, password: hash, email })
    let user = newUser[ 0 ]
    session.user = user
    res.status(200).send(session.user)
  },
  
  login: async (req, res) => {
    const { username, password } = req.body
    console.log(password)
    const { session } = req
    const db = req.app.get('db')
    let existingUser = await db.auth.login({ username })
    console.log(existingUser)
    existingUser = existingUser[ 0 ]
    let authenticated = bcrypt.compareSync(password, existingUser.password)
    console.log(authenticated)
    if (authenticated) {
      delete existingUser.password
      session.user = existingUser
      console.log(session.user)
      res.status(200).send(session.user)
    }
  },
  
  checkForUser: (req, res) => {
    console.log(req.session)
    const { user } = req.session
    if (user) {
      res.status(200).send(user)
    } else {
      res.sendStatus(401)
    }
  },

  logout: (req, res) => {
    req.session.destroy(function () {
      res.sendStatus(200)
    })
  }
}