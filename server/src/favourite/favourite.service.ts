import { Injectable } from '@nestjs/common';
import { CreateFavouriteInput } from './dto/create-favourite.input';
import { UpdateFavouriteInput } from './dto/update-favourite.input';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Favourite} from "./entities/favourite.entity";

@Injectable()
export class FavouriteService {
  constructor(@InjectRepository(Favourite) private favouritesRepository: Repository<Favourite>) {
  }

  create(createFavouriteInput: CreateFavouriteInput) {
    const newFavourite = this.favouritesRepository.create(createFavouriteInput)

    return this.favouritesRepository.save(newFavourite)  }

  findAll() {
    return this.favouritesRepository.find()
  }

  findOne(id: number) {
    return this.favouritesRepository.findOneOrFail({
      where: {
        id
      }
    })
  }

  update(id: number, updateFavouriteInput: UpdateFavouriteInput) {
    return `This action updates a #${id} favourite`;
  }

  remove(id: number) {
    return `This action removes a #${id} favourite`;
  }
}
