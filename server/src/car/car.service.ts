import {Inject, Injectable} from '@nestjs/common';
import {Car} from "./car.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {CreateCarInput} from "./dto/create-car.input";
import {UserService} from "../user/user.service";
import {User} from "../user/entities/user.entity";

@Injectable()
export class CarService {
    constructor(@InjectRepository(Car) private carsRepository: Repository<Car>,
                // private userService: UserService
                ) {}

    createCar(createCarInput: CreateCarInput): Promise<Car> {
        const newCar = this.carsRepository.create(createCarInput)

        return this.carsRepository.save(newCar)
    }

    findAll(): Promise<Car[]> {
        return this.carsRepository.find()
    }

    findOne(id: number): Promise<Car> {
        return this.carsRepository.findOneOrFail({
            where: {
                id
            }
        })
    }

    // getUser(userId: number): Promise<User> {
    //     return this.userService.findOne(userId)
    // }
}
