import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarModule } from './car/car.module';
import {GraphQLModule} from "@nestjs/graphql";
import {ApolloDriver, ApolloDriverConfig} from "@nestjs/apollo";
import { join } from 'path';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Car} from "./car/car.entity";
import { UserModule } from './user/user.module';
import {User} from "./user/entities/user.entity";
import { BrandModule } from './brand/brand.module';
import {Brand} from "./brand/entities/brand.entity";

require('dotenv').config()

@Module({
  imports: [GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
  }),
      TypeOrmModule.forRoot({
        type: 'postgres',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: [Car, User, Brand],
        synchronize: true,
      }),
    CarModule,
    UserModule,
    BrandModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
