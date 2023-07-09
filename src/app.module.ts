import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { BooksModule } from './books/books.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import * as dotenv from 'dotenv'
import { AuthModule } from './auth/auth.module'
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'
import { UsersProfilesModule } from './users_profiles/users_profiles.module'
import { BooksReadingsModule } from './books_readings/books_readings.module'
import { CategoriesModule } from './categories/categories.module'
import { AuthorsModule } from './authors/authors.module';
import { BooksRecommendationsModule } from './books_recommendations/books_recommendations.module';

dotenv.config()
const {
  POSTGRES_HOST: pg_host,
  POSTGRES_DB: pg_db,
  POSTGRES_USER: pg_user,
  POSTGRES_PASSWORD: pg_password,
  POSTGRES_PORT: pg_port,
} = process.env

@Module({
  imports: [
    BooksModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: pg_host,
      port: parseInt(pg_port) || 3000,
      username: pg_user,
      password: pg_password,
      database: pg_db,
      entities: ['./**/*.entity.js'],
      synchronize: true,
      namingStrategy: new SnakeNamingStrategy(),
    }),
    AuthModule,
    UsersProfilesModule,
    BooksReadingsModule,
    CategoriesModule,
    AuthorsModule,
    BooksRecommendationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
