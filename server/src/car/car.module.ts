import { Module } from '@nestjs/common';
import { CarService } from './car.service';
import { CarResolver } from './car.resolver';
import {Car} from "./car.entity";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserModule} from "../user/user.module";
import {BrandModule} from "../brand/brand.module";

@Module({
  imports: [TypeOrmModule.forFeature([Car]), UserModule, BrandModule],
  providers: [CarService, CarResolver]
})
export class CarModule {}
