// export const typeDefs1 = `#graphql


// type Game {
//     id: ID!
//     title: String!
//     platform: [String!]
// }
// type Review {
//     id: ID!
//     rating: Int!
//     content: String
//     author_id: 
// }
// type Author {
//     id: ID!
//     name: String!
//     verified: Boolean!
// }

// type Query {
//     reviews: [Review]
//     games: [Game]
//     authors: [Author]
// }
// `;


export const typeDefs = `#graphql
  type Game {
    id: ID!
    title: String!
    platform: [String!]!
  }
  type Review {
    id: ID!
    rating: Int!
    content: String!
  }
  type Author {
    id: ID!
    name: String!
    verified: Boolean!
  }
  type Query {
    games: [Game]
    reviews: [Review]
    authors: [Author]
    review(id: ID!): Review
    game(id: ID!): Game
    author(id: ID!): Author
  }
`

