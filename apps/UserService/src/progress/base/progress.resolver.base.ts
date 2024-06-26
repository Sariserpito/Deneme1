/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Progress } from "./Progress";
import { ProgressCountArgs } from "./ProgressCountArgs";
import { ProgressFindManyArgs } from "./ProgressFindManyArgs";
import { ProgressFindUniqueArgs } from "./ProgressFindUniqueArgs";
import { CreateProgressArgs } from "./CreateProgressArgs";
import { UpdateProgressArgs } from "./UpdateProgressArgs";
import { DeleteProgressArgs } from "./DeleteProgressArgs";
import { ProgressService } from "../progress.service";
@graphql.Resolver(() => Progress)
export class ProgressResolverBase {
  constructor(protected readonly service: ProgressService) {}

  async _progressesMeta(
    @graphql.Args() args: ProgressCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Progress])
  async progresses(
    @graphql.Args() args: ProgressFindManyArgs
  ): Promise<Progress[]> {
    return this.service.progresses(args);
  }

  @graphql.Query(() => Progress, { nullable: true })
  async progress(
    @graphql.Args() args: ProgressFindUniqueArgs
  ): Promise<Progress | null> {
    const result = await this.service.progress(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Progress)
  async createProgress(
    @graphql.Args() args: CreateProgressArgs
  ): Promise<Progress> {
    return await this.service.createProgress({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Progress)
  async updateProgress(
    @graphql.Args() args: UpdateProgressArgs
  ): Promise<Progress | null> {
    try {
      return await this.service.updateProgress({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Progress)
  async deleteProgress(
    @graphql.Args() args: DeleteProgressArgs
  ): Promise<Progress | null> {
    try {
      return await this.service.deleteProgress(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
