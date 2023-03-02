import { ObjectType, Field, Int } from '@nestjs/graphql';
import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Car} from "../../car/car.entity";

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field(type => Int)
  id: number;

  @Column()
  @Field()
  username: string;

  @Column()
  @Field()
  email: string;

  @Column()
  @Field()
  password: string;

  @OneToMany(() => Car, (car) => car.user)
  @Field(type => [Car], {nullable: true})
  cars?: Car[]
}
