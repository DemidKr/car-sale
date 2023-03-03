import {Resolver, Query, Mutation, Args, Int, ResolveField, Parent} from '@nestjs/graphql';
import { GenerationService } from './generation.service';
import { Generation } from './entities/generation.entity';
import { CreateGenerationInput } from './dto/create-generation.input';
import { UpdateGenerationInput } from './dto/update-generation.input';
import {ModelService} from "../model/model.service";
import {Model} from "../model/entities/model.entity";

@Resolver(() => Generation)
export class GenerationResolver {
  constructor(private readonly generationService: GenerationService,
              private modelService: ModelService) {}

  @Mutation(() => Generation)
  createGeneration(@Args('createGenerationInput') createGenerationInput: CreateGenerationInput) {
    return this.generationService.create(createGenerationInput);
  }

  @Query(() => [Generation], { name: 'generation' })
  generations() {
    return this.generationService.findAll();
  }

  @Query(() => Generation, { name: 'generation' })
  getGeneration(@Args('id', { type: () => Int }) id: number) {
    return this.generationService.findOne(id);
  }

  @ResolveField(returns => Model)
  model(@Parent() generation: Generation): Promise<Model> {
    return this.modelService.findOne(generation.modelId)
  }

  @Mutation(() => Generation)
  updateGeneration(@Args('updateGenerationInput') updateGenerationInput: UpdateGenerationInput) {
    return this.generationService.update(updateGenerationInput.id, updateGenerationInput);
  }

  @Mutation(() => Generation)
  removeGeneration(@Args('id', { type: () => Int }) id: number) {
    return this.generationService.remove(id);
  }
}
