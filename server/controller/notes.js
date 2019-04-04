module.exports = {

  createNote: (req, res) => {
    // if(!req.session.user){return}
    const { users_notes } = req.body
    // const {id} = req.session.user
    console.log('this is the session', req.session)
    console.log(users_notes)
    const db = req.app.get('db')
    db.user_notes.create_note([ users_notes ]).then(user_note => {
      res.status(200).send(user_note)
    }).catch(err => {
      console.log(err)
      res.status(500).send(user_note)
    })
  },

  updateNote: (req, res) => {
    console.log('hit update note')
    const db = req.app.get('db')
    const { note_id } = req.params
    const { users_notes } = req.body
    console.log(users_notes, note_id)
    db.user_notes.update_note([ note_id, users_notes ]).then(user_note => {
      res.status(200).send(user_note)
    })
      .catch(err => {
        res.status(500).send(err)
      })
    console.log('finish update note')
  },

  deleteNote: (req, res) => {
    const db = req.app.get('db')
    const { note_id } = req.params
    db.user_notes.delete_note(note_id).then(users_notes => {
      res.status(200).send(users_notes)
    }).catch(err => {
      res.status(500).send(err)
    })
  },

  getUserNotes: (req, res) => {
    const db = req.app.get('db')
    db.user_notes.get_user_notes().then(users_notes => {
      res.status(200).send(users_notes)
    })
      .catch(err => {
        res.status(500).send(err)
      })
  }

}
