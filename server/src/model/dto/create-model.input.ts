import { InputType, Int, Field } from '@nestjs/graphql';
import {Column} from "typeorm";

@InputType()
export class CreateModelInput {
  @Column()
  @Field()
  name: string;

  @Column()
  @Field(type => Int)
  brandId: number;
}
