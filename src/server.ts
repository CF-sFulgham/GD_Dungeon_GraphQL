import express from 'express';
import { SERVER_PORT } from './constants';
import schema from './typedefs';
import root from './resolvers';
import { graphqlHTTP } from 'express-graphql';

(async () => {
    const app = express();
    
    app.use(
        "/graphql",
        express.json(),
        graphqlHTTP({
            schema,
            rootValue: root,
            graphiql: true
        })
    )

    // Start the server
    app.listen(SERVER_PORT, () => {
        console.log(`Server is running on http://localhost:${SERVER_PORT}/graphql`);
    });

})().catch((err) => {
    console.error('Error initializing Apollo Server:', err);
});

// Middleware
