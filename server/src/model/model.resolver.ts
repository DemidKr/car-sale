import {Resolver, Query, Mutation, Args, Int, ResolveField, Parent} from '@nestjs/graphql';
import { ModelService } from './model.service';
import { Model } from './entities/model.entity';
import { CreateModelInput } from './dto/create-model.input';
import { UpdateModelInput } from './dto/update-model.input';
import {Brand} from "../brand/entities/brand.entity";
import {BrandService} from "../brand/brand.service";

@Resolver(() => Model)
export class ModelResolver {
  constructor(private readonly modelService: ModelService,
              private brandService: BrandService) {}

  @Mutation(() => Model)
  createModel(@Args('createModelInput') createModelInput: CreateModelInput) {
    return this.modelService.create(createModelInput);
  }

  @Query(() => [Model], { name: 'model' })
  models() {
    return this.modelService.findAll();
  }

  @Query(() => Model, { name: 'model' })
  getModel(@Args('id', { type: () => Int }) id: number) {
    return this.modelService.findOne(id);
  }

  @ResolveField(returns => Brand)
  brand(@Parent() model: Model): Promise<Brand> {
    return this.brandService.findOne(model.brandId)
  }

  @Mutation(() => Model)
  updateModel(@Args('updateModelInput') updateModelInput: UpdateModelInput) {
    return this.modelService.update(updateModelInput.id, updateModelInput);
  }

  @Mutation(() => Model)
  removeModel(@Args('id', { type: () => Int }) id: number) {
    return this.modelService.remove(id);
  }
}
