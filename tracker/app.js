/*require('dotenv').config()

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database');

app.route('/bacteria/:postgres')
  .get(function(req, res, next) {
    connection.query(
      "SELECT * FROM `bacteria`",
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
  });

app.get('/status', (req, res) => res.send('Working!'));

// Port 8080 for Google App Engine
app.set('port', process.env.PORT || 3000);
app.listen(3000);*/

// The on-board LED
int led = D7;

void setup() {
  pinMode(led, OUTPUT);
}
void loop() {
  // Turn the LED Off
  digitalWrite(led, HIGH);
  // Publish an event to trigger the integration
  // Replace "my-event" with the event name you used when configuring the integration
  // Replace "test-data" with the real data you'd like to send to Google Cloud Platform
  Particle.publish("my-event", "test-data", PRIVATE);
  // Wait for 3 seconds
  delay(3000);
  // Turn the LED off
  digitalWrite(led, LOW);
  delay(3000);
}