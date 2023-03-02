import { ObjectType, Field, Int } from '@nestjs/graphql';
import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Car} from "../../car/car.entity";

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

  @OneToMany(() => Car, (car) => car.brand)
  @Field(type => [Car], {nullable: true})
  cars?: Car[]
}
