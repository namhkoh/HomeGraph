require('dotenv').config();
const https = require('https');
const { ServiceBroker } = require('moleculer');
const AWS = require('aws-sdk');
const { Consumer } = require('sqs-consumer');
const { homegraphService } = require('./services/homegraph.service');

const broker = new ServiceBroker({
  namespace: 'AIX',
  nodeID: `HomeGraph`,
  // transporter: 'nats://localhost:4222', inside SRA
  transporter: 'TCP',
  logLevel: 'error',
  requestTimeout: 5 * 1000,
  registry: {
    strategy: 'Random',
  },
});

broker.createService(homegraphService);

broker.start().then(async () => {
  AWS.config.update({
    region: 'us-west-1',
    accessKeyId: `${process.env.CLIENT_ID}`,
    secretAccessKey: `${process.env.CLIENT_SECRET}`,
  });

  const queueUrl = `${process.env.QUEUE_URL}`;

  broker.logger.info(
    '----------------------------------------------------------'
  );
  broker.logger.info(
    'Open the http://localhost:3000/graphql URL in your browser'
  );
  broker.logger.info(
    '----------------------------------------------------------'
  );
  const app = Consumer.create({
    queueUrl,
    handleMessage: async message => {
      try {
      broker.emit('homegraph.smartThings', JSON.parse(message.Body));
      } catch(e) {
        console.log(`Unable to parse message ${e}`)
      }
    },
    sqs: new AWS.SQS({
      httpOptions: {
        agent: new https.Agent({
          keepAlive: true,
        }),
      },
    }),
  });

  app.on('error', err => {
    console.error(err.message);
  });

  app.on('processing_error', err => {
    console.error(err.message);
  });

  console.log(`Starting Q reader`);
  app.start();
});
