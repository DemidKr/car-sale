import { Module } from '@nestjs/common';
import { FavouriteService } from './favourite.service';
import { FavouriteResolver } from './favourite.resolver';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Favourite} from "./entities/favourite.entity";
import {CarModule} from "../car/car.module";
import {UserModule} from "../user/user.module";

@Module({
  imports: [TypeOrmModule.forFeature([Favourite]), CarModule, UserModule],
  providers: [FavouriteResolver, FavouriteService],
  exports: [FavouriteService]
})
export class FavouriteModule {}
