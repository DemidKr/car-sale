import {Resolver, Query, Mutation, Args, Int, ResolveField, Parent} from '@nestjs/graphql';
import { PackageService } from './package.service';
import { Package } from './entities/package.entity';
import { CreatePackageInput } from './dto/create-package.input';
import { UpdatePackageInput } from './dto/update-package.input';
import {Generation} from "../generation/entities/generation.entity";
import {GenerationService} from "../generation/generation.service";

@Resolver(() => Package)
export class PackageResolver {
  constructor(private readonly packageService: PackageService,
              private generationService: GenerationService) {}

  @Mutation(() => Package)
  createPackage(@Args('createPackageInput') createPackageInput: CreatePackageInput) {
    return this.packageService.create(createPackageInput);
  }

  @Query(() => [Package], { name: 'package' })
  packages() {
    return this.packageService.findAll();
  }

  @Query(() => Package, { name: 'package' })
  getPackage(@Args('id', { type: () => Int }) id: number) {
    return this.packageService.findOne(id);
  }

  @ResolveField(returns => Generation)
  generation(@Parent() packageName: Package): Promise<Generation> {
    return this.generationService.findOne(packageName.generationId)
  }


  @Mutation(() => Package)
  updatePackage(@Args('updatePackageInput') updatePackageInput: UpdatePackageInput) {
    return this.packageService.update(updatePackageInput.id, updatePackageInput);
  }

  @Mutation(() => Package)
  removePackage(@Args('id', { type: () => Int }) id: number) {
    return this.packageService.remove(id);
  }
}
