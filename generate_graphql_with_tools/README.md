Step 3: Generate graphql using tools

Step 3.1: Generate graphql schema:
npx swagger-to-graphql --swagger-schema=/path/to/swagger_schema.json > ./types.graphql
#ref: https://github.com/yarax/swagger-to-graphql

Step 3.2: Generate app from schema:
Follow the following steps:
#ref: https://github.com/prisma-labs/graphqlgen
Then make modifications:
- Remove redundant files
- Implement details for Resolvers 