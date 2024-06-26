import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GameServiceBase } from "./base/game.service.base";

@Injectable()
export class GameService extends GameServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
