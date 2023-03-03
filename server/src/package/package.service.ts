import { Injectable } from '@nestjs/common';
import { CreatePackageInput } from './dto/create-package.input';
import { UpdatePackageInput } from './dto/update-package.input';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Package} from "./entities/package.entity";

@Injectable()
export class PackageService {
  constructor(@InjectRepository(Package) private packagesRepository: Repository<Package>,
  ) {}

  create(createPackageInput: CreatePackageInput) {
    const newPackage = this.packagesRepository.create(createPackageInput)

    return this.packagesRepository.save(newPackage)
  }

  findAll() {
    return this.packagesRepository.find()
  }

  findOne(id: number) {
    return this.packagesRepository.findOneOrFail({
      where: {
        id
      }
    })
  }

  update(id: number, updatePackageInput: UpdatePackageInput) {
    return `This action updates a #${id} package`;
  }

  remove(id: number) {
    return `This action removes a #${id} package`;
  }
}
