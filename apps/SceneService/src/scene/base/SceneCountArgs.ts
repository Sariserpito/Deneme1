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
import { SceneWhereInput } from "./SceneWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class SceneCountArgs {
  @ApiProperty({
    required: false,
    type: () => SceneWhereInput,
  })
  @Field(() => SceneWhereInput, { nullable: true })
  @Type(() => SceneWhereInput)
  where?: SceneWhereInput;
}

export { SceneCountArgs as SceneCountArgs };
