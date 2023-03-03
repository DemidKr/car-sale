import { Injectable } from '@nestjs/common';
import { CreateGenerationInput } from './dto/create-generation.input';
import { UpdateGenerationInput } from './dto/update-generation.input';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Generation} from "./entities/generation.entity";

@Injectable()
export class GenerationService {
  constructor(@InjectRepository(Generation) private generationsRepository: Repository<Generation>,
  ) {}
  create(createGenerationInput: CreateGenerationInput) {
    const newGeneration = this.generationsRepository.create(createGenerationInput)

    return this.generationsRepository.save(newGeneration)
  }

  findAll() {
    return this.generationsRepository.find
  }

  findOne(id: number) {
    return this.generationsRepository.findOneOrFail({
      where: {
        id
      }
    })
  }

  update(id: number, updateGenerationInput: UpdateGenerationInput) {
    return `This action updates a #${id} generation`;
  }

  remove(id: number) {
    return `This action removes a #${id} generation`;
  }
}
