import { ObjectType, Field, Int } from '@nestjs/graphql';
import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Car} from "../../car/car.entity";
import {User} from "../../user/entities/user.entity";

@Entity()
@ObjectType()
export class Favourite {
  @PrimaryGeneratedColumn()
  @Field(type => Int)
  id: number;

  @Column()
  @Field(type => Int)
  carId: number;

  @ManyToOne(() => Car, (car) => car.favourite)
  @Field(type => Car)
  car: Car

  @Column()
  @Field(type => Int)
  userId: number;

  @ManyToOne(() => User, (user) => user.favourite)
  @Field(type => User)
  user: User
}
