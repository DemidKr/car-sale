import { Injectable } from '@nestjs/common';
import { CreateBrandInput } from './dto/create-brand.input';
import { UpdateBrandInput } from './dto/update-brand.input';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Brand} from "./entities/brand.entity";

@Injectable()
export class BrandService {
  constructor(@InjectRepository(Brand) private brandsRepository: Repository<Brand>,
  ) {}

  create(createBrandInput: CreateBrandInput) {
    const newBrand = this.brandsRepository.create(createBrandInput)

    return this.brandsRepository.save(newBrand)
  }

  findAll() {
    return this.brandsRepository.find()
  }

  findOne(id: number): Promise<Brand> {
    return this.brandsRepository.findOneOrFail({
      where: {
        id
      }
    })
  }

  update(id: number, updateBrandInput: UpdateBrandInput) {
    return `This action updates a #${id} brand`;
  }

  remove(id: number) {
    return `This action removes a #${id} brand`;
  }
}
