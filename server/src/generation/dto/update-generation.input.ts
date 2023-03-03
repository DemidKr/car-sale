import { CreateGenerationInput } from './create-generation.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateGenerationInput extends PartialType(CreateGenerationInput) {
  @Field(() => Int)
  id: number;
}
