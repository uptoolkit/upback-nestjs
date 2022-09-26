import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsResolver } from './posts.resolver';
import { PrismaService } from '../prisma.service';

@Module({
  imports: [PrismaService],
  providers: [PostsResolver, PostsService],
})
export class PostsModule {}
