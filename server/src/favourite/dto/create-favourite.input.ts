import { InputType, Int, Field } from '@nestjs/graphql';
import {Column} from "typeorm";

@InputType()
export class CreateFavouriteInput {
  @Column()
  @Field(type => Int)
  carId: number;

  @Column()
  @Field(type => Int)
  userId: number;
}
