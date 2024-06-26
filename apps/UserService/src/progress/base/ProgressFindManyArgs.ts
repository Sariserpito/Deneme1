/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProgressWhereInput } from "./ProgressWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ProgressOrderByInput } from "./ProgressOrderByInput";

@ArgsType()
class ProgressFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ProgressWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ProgressWhereInput, { nullable: true })
  @Type(() => ProgressWhereInput)
  where?: ProgressWhereInput;

  @ApiProperty({
    required: false,
    type: [ProgressOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ProgressOrderByInput], { nullable: true })
  @Type(() => ProgressOrderByInput)
  orderBy?: Array<ProgressOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ProgressFindManyArgs as ProgressFindManyArgs };
