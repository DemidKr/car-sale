import { ObjectType, Field, Int } from '@nestjs/graphql';
import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Car} from "../../car/car.entity";
import {Model} from "../../model/entities/model.entity";

@Entity()
@ObjectType()
export class Generation {
  @PrimaryGeneratedColumn()
  @Field(type => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field(type => Int)
  modelId: number;

  @ManyToOne(() => Model, (model) => model.cars)
  @Field(type => Model)
  model: Model

  @OneToMany(() => Car, (car) => car.generation)
  @Field(type => [Car], {nullable: true})
  cars?: Car[]
}
