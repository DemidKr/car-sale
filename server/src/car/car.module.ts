import { Module } from '@nestjs/common';
import { CarService } from './car.service';
import { CarResolver } from './car.resolver';
import {Car} from "./car.entity";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserModule} from "../user/user.module";
import {BrandModule} from "../brand/brand.module";
import {GenerationModule} from "../generation/generation.module";
import {ModelModule} from "../model/model.module";
import {PackageModule} from "../package/package.module";

@Module({
  imports: [TypeOrmModule.forFeature([Car]), UserModule, BrandModule, GenerationModule, ModelModule, PackageModule],
  providers: [CarService, CarResolver],
  exports: [CarService]
})
export class CarModule {}
