import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from "./auth/auth.module";
import { UsersModule } from "./users/users.module";
import { HealthModule } from "./health/health.module";
import { join } from "path";
import { PrismaCrudModule } from "nestjs-prisma-crud";
import { PrismaService } from "./prisma.service";
import { AppResolver } from "./app.resolver";
import { GraphqlModule } from "./graphql/graphql.module";
import { AppController } from "./app.controller";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [".env.local", ".env"],
    }),
    PrismaCrudModule.register({
      prismaService: PrismaService,
    }),
    AuthModule,
    UsersModule,
    HealthModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), "src/schema.gql"),
      sortSchema: true,
    }),
    GraphqlModule,
    AppResolver,
  ],
  providers: [AppResolver],
  controllers: [AppController],
})
export class AppModule {}
