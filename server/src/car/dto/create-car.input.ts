import {Field, InputType, Int} from "@nestjs/graphql";
import {Column} from "typeorm";

@InputType()
export class CreateCarInput {
    @Field()
    name: string

    @Field(type => Int)
    price: number

    @Field(type => Int)
    year: number

    @Field(type => Int)
    brandId: number;

    @Column()
    @Field(type => Int)
    modelId: number;

    @Column()
    @Field(type => Int)
    generationId: number;

    @Column()
    @Field(type => Int, {nullable: true})
    packageId?: number;
}