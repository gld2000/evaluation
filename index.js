const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 5000

app.get('/', (req, res) => res.send('Hello World! node.js'))

app.use(bodyParser.json());

// Webhook endpoint
app.post('/webhook', (req, res) => {
  const event = req.body.event;

  if (event === 'meeting.participant_joined') {
      const participant = req.body.payload.object.participant;
      console.log(`Participant joined: ${participant.user_name} (${participant.email})`);
  }

  res.status(200).send('Webhook received');
});

app.listen(port, () => console.log(`Example app listening on port ${port}`))