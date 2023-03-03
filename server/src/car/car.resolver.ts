import {Resolver, Query, Mutation, Args, Int, Parent, ResolveField} from '@nestjs/graphql';
import {CarService} from "./car.service";
import {Car} from "./car.entity";
import {CreateCarInput} from "./dto/create-car.input";
import {UserService} from "../user/user.service";
import {Brand} from "../brand/entities/brand.entity";
import {BrandService} from "../brand/brand.service";
import {Model} from "../model/entities/model.entity";
import {ModelService} from "../model/model.service";
import {GenerationService} from "../generation/generation.service";
import {PackageService} from "../package/package.service";
import {Generation} from "../generation/entities/generation.entity";
import {Package} from "../package/entities/package.entity";

@Resolver(of => Car)
export class CarResolver {
    constructor(
        private carService: CarService,
        private userService: UserService,
        private brandService: BrandService,
        private modelService: ModelService,
        private generationService: GenerationService,
        private packageService: PackageService
    ) {}

    @Query(returns => [Car])
    cars(): Promise<Car[]> {
        return this.carService.findAll()
    }

    @Query(returns => Car)
    getCar(@Args('id', {type: () => Int}) id: number): Promise<Car> {
        return this.carService.findOne(id)
    }

    @ResolveField(returns => Brand)
    brand(@Parent() car: Car): Promise<Brand> {
        return this.brandService.findOne(car.brandId)
    }

    @ResolveField(returns => Model)
    model(@Parent() car: Car): Promise<Model> {
        return this.modelService.findOne(car.modelId)
    }

    @ResolveField(returns => Generation)
    generation(@Parent() car: Car): Promise<Generation> {
        return this.generationService.findOne(car.generationId)
    }

    @ResolveField(returns => Package)
    package(@Parent() car: Car): Promise<Package> {
        return this.packageService.findOne(car.packageId)
    }

    @Mutation(returns => Car)
    createCar(@Args('createCarInput') createCarInput: CreateCarInput): Promise<Car> {
        return this.carService.createCar(createCarInput)
    }
}
