import { InputType, Int, Field } from '@nestjs/graphql';
import {Column} from "typeorm";

@InputType()
export class CreateGenerationInput {
  @Column()
  @Field()
  name: string;

  @Column()
  @Field(type => Int)
  modelId: number;
}
