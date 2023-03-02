import { InputType, Int, Field } from '@nestjs/graphql';
import {Column} from "typeorm";

@InputType()
export class CreateBrandInput {
  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  isForeign: boolean;
}
