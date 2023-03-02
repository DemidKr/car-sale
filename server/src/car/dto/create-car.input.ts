import {Field, InputType, Int} from "@nestjs/graphql";

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

    @Field(type => Int)
    userId: number;
}