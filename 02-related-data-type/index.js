import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import _db from './_db.js';
import { typeDefs } from './schema.js';




const resolvers = {
    Query: {
        games() {
            return _db.games
        },
        authors() {
            return _db.authors
        },
        reviews() {
            return _db.reviews
        },
        review(_, args) {
            return _db.reviews.find(review => review.id === args.id)
        },
        author(_, args) {
            return _db.authors.find(author => author.id === args.id)
        },
        game(_, args) {
            return _db.games.find(game => game.id === args.id)
        }

    },

    Game: {
        reviews(parent) {
            console.log("Parent is ::: ",parent);
            return _db.reviews.filter(review => review.game_id === parent.id)
        }
    },
    Review: {
        author(parent) {
            return _db.authors.find(author => author.id === parent.author_id)
        },
        game(parent) {
            return _db.games.find(game => game.id === parent.game_id)
        }
    },
    Author: {
        reviews(parent) {
            return _db.reviews.filter(review => review.author_id === parent.id)
        }
    }
    
}
//server setUp
const server = new ApolloServer({
    typeDefs,
    resolvers 
})

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
});

console.log('Server ready at port', 4000);