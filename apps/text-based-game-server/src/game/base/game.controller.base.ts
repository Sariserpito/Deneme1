/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { GameService } from "../game.service";
import { GameCreateInput } from "./GameCreateInput";
import { Game } from "./Game";
import { GameFindManyArgs } from "./GameFindManyArgs";
import { GameWhereUniqueInput } from "./GameWhereUniqueInput";
import { GameUpdateInput } from "./GameUpdateInput";
import { ProgressFindManyArgs } from "../../progress/base/ProgressFindManyArgs";
import { Progress } from "../../progress/base/Progress";
import { ProgressWhereUniqueInput } from "../../progress/base/ProgressWhereUniqueInput";
import { TimerFindManyArgs } from "../../timer/base/TimerFindManyArgs";
import { Timer } from "../../timer/base/Timer";
import { TimerWhereUniqueInput } from "../../timer/base/TimerWhereUniqueInput";

export class GameControllerBase {
  constructor(protected readonly service: GameService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Game })
  async createGame(@common.Body() data: GameCreateInput): Promise<Game> {
    return await this.service.createGame({
      data: data,
      select: {
        createdAt: true,
        id: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Game] })
  @ApiNestedQuery(GameFindManyArgs)
  async games(@common.Req() request: Request): Promise<Game[]> {
    const args = plainToClass(GameFindManyArgs, request.query);
    return this.service.games({
      ...args,
      select: {
        createdAt: true,
        id: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Game })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async game(
    @common.Param() params: GameWhereUniqueInput
  ): Promise<Game | null> {
    const result = await this.service.game({
      where: params,
      select: {
        createdAt: true,
        id: true,
        title: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Game })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateGame(
    @common.Param() params: GameWhereUniqueInput,
    @common.Body() data: GameUpdateInput
  ): Promise<Game | null> {
    try {
      return await this.service.updateGame({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Game })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteGame(
    @common.Param() params: GameWhereUniqueInput
  ): Promise<Game | null> {
    try {
      return await this.service.deleteGame({
        where: params,
        select: {
          createdAt: true,
          id: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/progresses")
  @ApiNestedQuery(ProgressFindManyArgs)
  async findProgresses(
    @common.Req() request: Request,
    @common.Param() params: GameWhereUniqueInput
  ): Promise<Progress[]> {
    const query = plainToClass(ProgressFindManyArgs, request.query);
    const results = await this.service.findProgresses(params.id, {
      ...query,
      select: {
        createdAt: true,
        currentScene: true,

        game: {
          select: {
            id: true,
          },
        },

        id: true,

        scene: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/progresses")
  async connectProgresses(
    @common.Param() params: GameWhereUniqueInput,
    @common.Body() body: ProgressWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      progresses: {
        connect: body,
      },
    };
    await this.service.updateGame({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/progresses")
  async updateProgresses(
    @common.Param() params: GameWhereUniqueInput,
    @common.Body() body: ProgressWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      progresses: {
        set: body,
      },
    };
    await this.service.updateGame({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/progresses")
  async disconnectProgresses(
    @common.Param() params: GameWhereUniqueInput,
    @common.Body() body: ProgressWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      progresses: {
        disconnect: body,
      },
    };
    await this.service.updateGame({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/timers")
  @ApiNestedQuery(TimerFindManyArgs)
  async findTimers(
    @common.Req() request: Request,
    @common.Param() params: GameWhereUniqueInput
  ): Promise<Timer[]> {
    const query = plainToClass(TimerFindManyArgs, request.query);
    const results = await this.service.findTimers(params.id, {
      ...query,
      select: {
        createdAt: true,
        delay: true,

        game: {
          select: {
            id: true,
          },
        },

        id: true,

        scene: {
          select: {
            id: true,
          },
        },

        targetScene: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/timers")
  async connectTimers(
    @common.Param() params: GameWhereUniqueInput,
    @common.Body() body: TimerWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      timers: {
        connect: body,
      },
    };
    await this.service.updateGame({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/timers")
  async updateTimers(
    @common.Param() params: GameWhereUniqueInput,
    @common.Body() body: TimerWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      timers: {
        set: body,
      },
    };
    await this.service.updateGame({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/timers")
  async disconnectTimers(
    @common.Param() params: GameWhereUniqueInput,
    @common.Body() body: TimerWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      timers: {
        disconnect: body,
      },
    };
    await this.service.updateGame({
      where: params,
      data,
      select: { id: true },
    });
  }
}
