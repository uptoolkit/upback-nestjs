import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { resolve } from "path";
import { NestExpressApplication } from "@nestjs/platform-express";
import { PrismaService } from "./prisma.service";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const prismaService = app.get(PrismaService);

  app.useStaticAssets(resolve("./src/public"));
  app.setBaseViewsDir(resolve("./src/views"));
  app.setViewEngine("hbs");

  const config = new DocumentBuilder()
    .setTitle("Up NestJS example")
    .setDescription("Up Rest Api Documentation")
    .setVersion("1.0")
    .addTag("Uptoolkit")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);

  await app.listen(3000, () => {
    console.log(`🩺️ Health check at: http://localhost:3000/health`);
    console.log(`🚀 Graphql playground at: http://localhost:3000/graphql`);
    console.log(`🚀 Api docs at: http://localhost:3000/api`);
    console.log(`📖 Docs at: https://docs.nestjs.com/`);
  });
}

bootstrap().catch((r) => console.log(r));
