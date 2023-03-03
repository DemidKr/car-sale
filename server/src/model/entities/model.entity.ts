import { ObjectType, Field, Int } from '@nestjs/graphql';
import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Car} from "../../car/car.entity";
import {Brand} from "../../brand/entities/brand.entity";

@Entity()
@ObjectType()
export class Model {
  @PrimaryGeneratedColumn()
  @Field(type => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field(type => Int)
  brandId: number;

  @ManyToOne(() => Brand, (brand) => brand.cars)
  @Field(type => Brand)
  brand: Brand

  @OneToMany(() => Car, (car) => car.model)
  @Field(type => [Car], {nullable: true})
  cars?: Car[]
}
