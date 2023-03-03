import { Module } from '@nestjs/common';
import { PackageService } from './package.service';
import { PackageResolver } from './package.resolver';
import {TypeOrmModule} from "@nestjs/typeorm";
import {GenerationModule} from "../generation/generation.module";
import {Package} from "./entities/package.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Package]), GenerationModule],
  providers: [PackageResolver, PackageService],
  exports: [PackageService]
})
export class PackageModule {}
