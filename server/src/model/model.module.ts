import { Module } from '@nestjs/common';
import { ModelService } from './model.service';
import { ModelResolver } from './model.resolver';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Model} from "./entities/model.entity";
import {BrandModule} from "../brand/brand.module";

@Module({
  imports: [TypeOrmModule.forFeature([Model]), BrandModule],
  providers: [ModelResolver, ModelService],
  exports: [ModelService]
})
export class ModelModule {}
