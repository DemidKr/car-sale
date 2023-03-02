import {Resolver, Query, Mutation, Args, Int, Parent, ResolveField} from '@nestjs/graphql';
import {CarService} from "./car.service";
import {Car} from "./car.entity";
import {CreateCarInput} from "./dto/create-car.input";
import {User} from "../user/entities/user.entity";
import {UserService} from "../user/user.service";
import {Brand} from "../brand/entities/brand.entity";
import {BrandService} from "../brand/brand.service";

@Resolver(of => Car)
export class CarResolver {
    constructor(
        private carService: CarService,
        private userService: UserService,
        private brandService: BrandService
    ) {}

    @Query(returns => [Car])
    cars(): Promise<Car[]> {
        return this.carService.findAll()
    }

    @Query(returns => Car)
    getCar(@Args('id', {type: () => Int}) id: number): Promise<Car> {
        return this.carService.findOne(id)
    }

    @ResolveField(returns => User)
    user(@Parent() car: Car): Promise<User> {
        return this.userService.findOne(car.userId)
    }

    @ResolveField(returns => Brand)
    brand(@Parent() car: Car): Promise<Brand> {
        return this.brandService.findOne(car.brandId)
    }

    @Mutation(returns => Car)
    createCar(@Args('createCarInput') createCarInput: CreateCarInput): Promise<Car> {
        return this.carService.createCar(createCarInput)
    }
}
