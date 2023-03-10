import { ObjectType, Field, Int } from '@nestjs/graphql';
import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Car} from "../../car/car.entity";
import {Model} from "../../model/entities/model.entity";

@Entity()
@ObjectType()
export class Brand {
  @PrimaryGeneratedColumn()
  @Field(type => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  isForeign: boolean;

  @OneToMany(() => Model, (model) => model.brand)
  @Field(type => [Model], {nullable: true})
  models?: Model[]

  @OneToMany(() => Car, (car) => car.brand)
  @Field(type => [Car], {nullable: true})
  cars?: Car[]
}
