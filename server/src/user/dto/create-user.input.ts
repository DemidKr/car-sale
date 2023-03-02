import { InputType, Int, Field } from '@nestjs/graphql';
import {Column} from "typeorm";

@InputType()
export class CreateUserInput {
  @Field()
  username: string;

  @Field()
  email: string;

  @Field()
  password: string;
}
