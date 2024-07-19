# GraphQL Basics

This project demonstrates a basic GraphQL server setup using Apollo Server. The server handles queries and mutations for games, reviews, and authors, allowing for the retrieval and manipulation of this data.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/graphql-basics.git
    cd graphql-basics
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

## Usage

1. Start the server:
    ```bash
    node index.js
    ```

2. The server will start on port 4000. You can access the GraphQL playground at `http://localhost:4000` to interact with the API.

## Schema

### Types

- **Game**
    ```graphql
    type Game {
    id: ID!
    title: String!
    platform: [String!]!
    reviews: [Review!]
    }
    ```

- **Review**
    ```graphql
    type Review {
    id: ID!
    rating: String!
    content: String!
    game: Game!
    author: Author!
    }
    ```
- **Author**
    ```graphql
    type Author {
    id: ID!
    name: String!
    verified: Boolean!
    reviews: [Review!]
    }
    ```


## Coures credits

Freecodecamp.org