module.exports = {
  // user_notes: (req, res) => {
  //   const {title, usernote}
  //   const db = req.app.get('db')
  //   let newnote = db.submit_user_note({title, usernote})
  // }

  // MainContent.js
  selectCategory: (req, res) => {
    console.log('hit select category')
    const db = req.app.get('db')
    db.select_category(req.params.category)
      .then(resp => {
        res.status(200).send(resp)
      })
  },
  topic: (req, res) => {
    console.log('hit select topic')
    const db = req.app.get('db')
    db.select_topic(req.params.topic)
      .then(resp => {
        // console.log(resp)
        res.status(200).send(resp)
      })
  },
  subTopic: (req, res) => {
    console.log('subtopic hit')
    const db = req.app.get('db')
    db.select_subtopic(req.params.subtopic)
      .then(resp => {
        // console.log(resp)
        res.status(200).send(resp)
      })
  },
  getData: (req, res) => {
    const { category, topic, subtopic } = req.params
    const db = req.app.get('db')

    if (category !== 'undefined' && topic !== 'undefined' && subtopic !== 'undefined') {
      db.select_subtopic(subtopic).then(gotData).catch(nope)
      console.log(subtopic)
    } else if (category !== 'undefined' && topic !== 'undefined') {
      console.log(topic)
      db.select_topic(topic).then(gotData).catch(nope)
    } else {
      db.select_category(category).then(gotData).catch(nope)
      console.log(category)
    }

    function gotData(resp) {
      res.status(200).send(resp[ 0 ])
      console.log(resp)
    }

    function nope(err) {
      console.log(err)
    }
  },
  getAllData: (req, res) => {
    const db = req.app.get('db')
    db.select_all_data()
      .then(resp => {
        res.status(200).send(resp)
      })
  }
}