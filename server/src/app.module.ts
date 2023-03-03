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
import { ModelModule } from './model/model.module';
import { GenerationModule } from './generation/generation.module';
import { PackageModule } from './package/package.module';
import {Model} from "./model/entities/model.entity";
import {Generation} from "./generation/entities/generation.entity";
import {Package} from "./package/entities/package.entity";
import { FavouriteModule } from './favourite/favourite.module';
import {Favourite} from "./favourite/entities/favourite.entity";

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
        entities: [
            Car,
            User,
            Brand,
            Model,
            Generation,
            Package,
            Favourite
        ],
        synchronize: true,
      }),
    CarModule,
    UserModule,
    BrandModule,
    ModelModule,
    GenerationModule,
    PackageModule,
    FavouriteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
