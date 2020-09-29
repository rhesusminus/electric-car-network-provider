const express = require('express')

router.get('', function (req, res) {
  if (req.session.user) {
    return res.send(req.session.user)
  }

  return res.send('no session')
})
