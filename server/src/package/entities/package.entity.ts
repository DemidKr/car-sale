import { ObjectType, Field, Int } from '@nestjs/graphql';
import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Car} from "../../car/car.entity";
import {Generation} from "../../generation/entities/generation.entity";

@Entity()
@ObjectType()
export class Package {
  @PrimaryGeneratedColumn()
  @Field(type => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field(type => Int)
  generationId: number;

  @ManyToOne(() => Generation, (generation) => generation.cars)
  @Field(type => Generation)
  generation: Generation

  @OneToMany(() => Car, (car) => car.generation)
  @Field(type => [Car], {nullable: true})
  cars?: Car[]
}
