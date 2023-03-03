import {Field, Int, ObjectType} from "@nestjs/graphql";
import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Brand} from "../brand/entities/brand.entity";
import {Model} from "../model/entities/model.entity";
import {Generation} from "../generation/entities/generation.entity";
import {Package} from "../package/entities/package.entity";
import {Favourite} from "../favourite/entities/favourite.entity";

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

    @ManyToOne(() => Brand, (brand) => brand.cars)
    @Field(type => Brand)
    brand: Brand

    @Column()
    @Field(type => Int)
    modelId: number;

    @ManyToOne(() => Model, (model) => model.cars)
    @Field(type => Model)
    model: Model

    @Column()
    @Field(type => Int)
    generationId: number;

    @ManyToOne(() => Generation, (generation) => generation.cars)
    @Field(type => Generation)
    generation: Generation

    @Column({nullable:true})
    @Field(type => Int, {nullable: true})
    packageId?: number;

    @ManyToOne(() => Package, (packageName) => packageName.cars)
    @Field(type => Package,{nullable: true})
    package?: Package

    @OneToMany(() => Favourite, (favourite) => favourite.car)
    @Field(type => [Favourite], {nullable: true})
    favourite?: Favourite[]
}