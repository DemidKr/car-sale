import { Injectable } from '@nestjs/common';
import { CreateModelInput } from './dto/create-model.input';
import { UpdateModelInput } from './dto/update-model.input';
import {InjectRepository} from "@nestjs/typeorm";
import {Model} from "./entities/model.entity";
import {Repository} from "typeorm";

@Injectable()
export class ModelService {
  constructor(@InjectRepository(Model) private modelRepository: Repository<Model>) {
  }
  create(createModelInput: CreateModelInput) {
    const newModel = this.modelRepository.create(createModelInput)

    return this.modelRepository.save(newModel)
  }

  findAll() {
    return this.modelRepository.find()
  }

  findOne(id: number) {
    return this.modelRepository.findOneOrFail({
      where: {
        id
      }
    })
  }

  update(id: number, updateModelInput: UpdateModelInput) {
    return `This action updates a #${id} model`;
  }

  remove(id: number) {
    return `This action removes a #${id} model`;
  }
}
