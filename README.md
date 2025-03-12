# NestJS Up And Running with GraphQL, Swagger, Crud Helper and Passport/Auth Helper

This example shows how to implement structure and start a project with everything you need to create an API in Rest or GraphQL.

## Getting started

### 1. Download example and install dependencies

Download this example:

[https://github.com/uptoolkit/upback-nestjs/generate](https://github.com/uptoolkit/upback-nestjs/generate)

<details><summary><strong>Alternative:</strong> Clone the entire repo</summary>

Clone this repository:

```
git clone git@github.com:uptoolkit/upback-nestjs.git --depth=1
```

</details>

Install npm dependencies :

```bash
# Cd to the folder
cd upback-nestjs

npm install
#or
yarn install

#Then run :
npm run dev
#or
yarn dev
```

### 2. Create and seed the database

By default it use a Postgres SQL from the docker-compose. You should adapt the .env (you can start from the .env.example) and the schema.prisma to adapt it to your preferred database connection. Please be sure to have docker and docker-compose ([https://www.docker.com/products/docker-desktop/](https://www.docker.com/products/docker-desktop/)) on your computer before launching this command. You can have a quick check to docker-compose.yml to adapt it to your needs. There is pgadmin and appsmith (nocode app) included but absolutely not mandatory (you can remove it from the docker-compose.yml).

```
docker-compose up -d
```

Run the following command to create your Postgres SQL database file. This also creates the `User` and `Post` tables that are defined in [`prisma/schema.prisma`](./prisma/schema.prisma):

```
npx prisma migrate dev --name init
```

When `npx prisma migrate dev` is executed against a newly created database, seeding is also triggered. The seed file in [`prisma/seed.ts`](./prisma/seed.ts) will be executed and your database will be populated with the sample data.

### 2. Start the GraphQL server

Launch your GraphQL server with this command:

```
npm run dev
```

Navigate to [http://localhost:3000/graphql](http://localhost:3000/graphql) in your browser to explore the API of your GraphQL server in a [GraphQL Playground](https://github.com/prisma/graphql-playground).

## Using the GraphQL API

Follow the guide here :

[https://docs.nestjs.com/graphql/resolvers](https://docs.nestjs.com/graphql/resolvers)

## Using the Rest Api helper

Follow the guide here :

[https://docs.nestjs.com/openapi/introduction](https://docs.nestjs.com/openapi/introduction)

## Use the CRUD helper

This boilerplate is shipped with the native crud helper from Nest and a Prisma Crud helper :

- [https://docs.nestjs.com/recipes/crud-generator](https://docs.nestjs.com/recipes/crud-generator)
- [https://github.com/kepelrs/nestjs-prisma-crud](https://github.com/kepelrs/nestjs-prisma-crud)

## Auth Helper

This boilerplate is shipped with a simple Auth module helper using Passport and following this guide : https://docs.nestjs.com/security/authentication.

You are of course free to adapt but you will have a good go to auth module to start :-).

## Switch to another database (e.g. PostgreSQL, MySQL, SQL Server, MongoDB)

If you want to try this example with another database than SQLite, you can adjust the the database connection in [`prisma/schema.prisma`](./prisma/schema.prisma) by reconfiguring the `datasource` block.

Learn more about the different connection configurations in the [docs](https://www.prisma.io/docs/reference/database-reference/connection-urls).

<details><summary>Expand for an overview of example configurations with different databases</summary>

### PostgreSQL

For PostgreSQL, the connection URL has the following structure:

```prisma
datasource db {
  provider = "postgresql"
  url      = "postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=SCHEMA"
}
```

Here is an example connection string with a local PostgreSQL database:

```prisma
datasource db {
  provider = "postgresql"
  url      = "postgresql://janedoe:mypassword@localhost:5432/notesapi?schema=public"
}
```

### MySQL

For MySQL, the connection URL has the following structure:

```prisma
datasource db {
  provider = "mysql"
  url      = "mysql://USER:PASSWORD@HOST:PORT/DATABASE"
}
```

Here is an example connection string with a local MySQL database:

```prisma
datasource db {
  provider = "mysql"
  url      = "mysql://janedoe:mypassword@localhost:3306/notesapi"
}
```

### Microsoft SQL Server

Here is an example connection string with a local Microsoft SQL Server database:

```prisma
datasource db {
  provider = "sqlserver"
  url      = "sqlserver://localhost:1433;initial catalog=sample;user=sa;password=mypassword;"
}
```

### MongoDB

Here is an example connection string with a local MongoDB database:

```prisma
datasource db {
  provider = "mongodb"
  url      = "mongodb://USERNAME:PASSWORD@HOST/DATABASE?authSource=admin&retryWrites=true&w=majority"
}
```

Because MongoDB is currently in [Preview](https://www.prisma.io/docs/about/releases#preview), you need to specify the `previewFeatures` on your `generator` block:

```
generator client {
  provider        = "prisma-client-js"
  previewFeatures = ["mongodb"]
}
```

</details>

## Bonus : Nocode AppSmith interface

In the boilerplate, I have added a very simple and user friendly NoCode App Generator in the docker-compose.yml. It's of course not mandatory but might be useful to prototype something very quickly.

More infos : [https://www.appsmith.com/](https://www.appsmith.com/)

## Next steps

- Learn more about NestJS : https://docs.nestjs.com/
- Have a look at the prisma/seed.ts
- Try to login and have a token access with : https://docs.nestjs.com/security/authentication
- Play with docker-compose up and AppSmith
- Participate and ask for new features on Github
