import {Field, Int, ObjectType} from "@nestjs/graphql";
import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "../user/entities/user.entity";
import {Brand} from "../brand/entities/brand.entity";

@Entity()
@ObjectType()
export class Car {
    @PrimaryGeneratedColumn()
    @Field(type => Int)
    id: number;

    @Column()
    @Field()
    name: string;

    @Column()
    @Field(type => Int)
    price: number;

    @Column()
    @Field(type => Int)
    year: number;

    @Column()
    @Field(type => Int)
    brandId: number;

    @Column()
    @Field(type => Int)
    userId: number;

    @ManyToOne(() => Brand, (brand) => brand.cars)
    @Field(type => Brand)
    brand: Brand

    @ManyToOne(() => User, (user) => user.cars)
    @Field(type => User)
    user: User
}