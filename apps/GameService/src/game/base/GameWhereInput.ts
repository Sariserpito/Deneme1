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
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { JsonFilter } from "../../util/JsonFilter";
import { TimerListRelationFilter } from "../../timer/base/TimerListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

@InputType()
class GameWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: JsonFilter,
  })
  @Type(() => JsonFilter)
  @IsOptional()
  @Field(() => JsonFilter, {
    nullable: true,
  })
  progresses?: JsonFilter;

  @ApiProperty({
    required: false,
    type: () => TimerListRelationFilter,
  })
  @ValidateNested()
  @Type(() => TimerListRelationFilter)
  @IsOptional()
  @Field(() => TimerListRelationFilter, {
    nullable: true,
  })
  timers?: TimerListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  title?: StringNullableFilter;
}

export { GameWhereInput as GameWhereInput };
