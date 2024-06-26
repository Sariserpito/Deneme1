/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { GameWhereInput } from "./GameWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class GameListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => GameWhereInput,
  })
  @ValidateNested()
  @Type(() => GameWhereInput)
  @IsOptional()
  @Field(() => GameWhereInput, {
    nullable: true,
  })
  every?: GameWhereInput;

  @ApiProperty({
    required: false,
    type: () => GameWhereInput,
  })
  @ValidateNested()
  @Type(() => GameWhereInput)
  @IsOptional()
  @Field(() => GameWhereInput, {
    nullable: true,
  })
  some?: GameWhereInput;

  @ApiProperty({
    required: false,
    type: () => GameWhereInput,
  })
  @ValidateNested()
  @Type(() => GameWhereInput)
  @IsOptional()
  @Field(() => GameWhereInput, {
    nullable: true,
  })
  none?: GameWhereInput;
}
export { GameListRelationFilter as GameListRelationFilter };
