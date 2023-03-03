import { InputType, Int, Field } from '@nestjs/graphql';
import {Column, PrimaryGeneratedColumn} from "typeorm";

@InputType()
export class CreatePackageInput {
  @PrimaryGeneratedColumn()
  @Field(type => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field(type => Int)
  generationId: number;

}
