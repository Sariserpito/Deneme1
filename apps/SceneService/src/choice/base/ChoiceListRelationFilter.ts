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
import { ChoiceWhereInput } from "./ChoiceWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ChoiceListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ChoiceWhereInput,
  })
  @ValidateNested()
  @Type(() => ChoiceWhereInput)
  @IsOptional()
  @Field(() => ChoiceWhereInput, {
    nullable: true,
  })
  every?: ChoiceWhereInput;

  @ApiProperty({
    required: false,
    type: () => ChoiceWhereInput,
  })
  @ValidateNested()
  @Type(() => ChoiceWhereInput)
  @IsOptional()
  @Field(() => ChoiceWhereInput, {
    nullable: true,
  })
  some?: ChoiceWhereInput;

  @ApiProperty({
    required: false,
    type: () => ChoiceWhereInput,
  })
  @ValidateNested()
  @Type(() => ChoiceWhereInput)
  @IsOptional()
  @Field(() => ChoiceWhereInput, {
    nullable: true,
  })
  none?: ChoiceWhereInput;
}
export { ChoiceListRelationFilter as ChoiceListRelationFilter };
