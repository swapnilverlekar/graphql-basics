export const typeDefs =  `#graphql
    type Game{
        id:ID!
        title: String!
        platform: [String!]!
        reviews: [Review!]
    }
    type Review{
        id:ID!
        rating: String!
        content: String!
        game: Game!
        author: Author!
    }
    type Author{
        id:ID!
        name: String!
        verified: Boolean!
        reviews: [Review!]
    }
    type Query{
        reviews: [Review]
        authors: [Author]
        games: [Game] 
        review(id: ID!): Review
        game(id: ID!): Game
        author(id: ID!): Author
    }

    type Mutation{
        deleteGame(id: ID!): [Game]
        addGame(game: AddGameInput) : Game
    }

    input AddGameInput{
        title: String!,
        platform: [String!]!
    }
`