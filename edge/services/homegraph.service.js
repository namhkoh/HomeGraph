const ApiService = require('moleculer-web');
const IO = require('socket.io');
const { ApolloService } = require('moleculer-apollo-server');
const { typeDefs, resolvers } = require('../../index');

const homegraphService = {
  name: 'homegraph',

  mixins: [
    // Gateway
    ApiService,

    // GraphQL Apollo Server
    ApolloService({
      // Global GraphQL typeDefs
      typeDefs,

      // Global resolvers
      resolvers,

      // API Gateway route options
      routeOptions: {
        path: '/graphql',
        cors: true,
        mappingPolicy: 'restrict',
      },

      // https://www.apollographql.com/docs/apollo-server/v2/api/apollo-server.html
      serverOptions: {
        tracing: true,

        engine: {
          apiKey: process.env.APOLLO_ENGINE_KEY,
        },
      },
    }),
  ],
  events: {
    'homegraph.smartThings': function(ctx) {
      try {
        const event = ctx.params;
        if (this.io) {
          console.log(`### sending ${event.Message} to Websocket`);
          this.io.emit('smartThings', {
            sender: ctx.nodeID,
            payload: event,
          });
        }
      } catch (err) {
        console.log(`Error parsing message ${err}`);
      }
    },
  },
  started() {
    // Create a Socket.IO instance, passing it our server
    this.io = IO.listen(this.server);

    // Add a connect listener
    this.io.on('connection', client => {
      console.log('Client connected via websocket!');

      client.on('call', ({ action, params, opts }, done) => {
        console.log(
          `Received request from client! Action: ${action} with params ${params}`
        );

        this.broker
          .call(action, params, opts)
          .then(res => {
            if (done) done(res);
          })
          .catch(err => console.log(err));
      });

      client.on('disconnect', () => {
        console.log('Client disconnected');
      });
    });
  },
};

module.exports.homegraphService = homegraphService;
