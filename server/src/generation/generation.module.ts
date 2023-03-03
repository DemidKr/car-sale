import { Module } from '@nestjs/common';
import { GenerationService } from './generation.service';
import { GenerationResolver } from './generation.resolver';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ModelModule} from "../model/model.module";
import {Generation} from "./entities/generation.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Generation]), ModelModule],
  providers: [GenerationResolver, GenerationService],
  exports: [GenerationService]
})
export class GenerationModule {}
