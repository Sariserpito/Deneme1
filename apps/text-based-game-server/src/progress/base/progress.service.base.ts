/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Progress as PrismaProgress,
  Game as PrismaGame,
  Scene as PrismaScene,
  User as PrismaUser,
} from "@prisma/client";

export class ProgressServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ProgressCountArgs, "select">): Promise<number> {
    return this.prisma.progress.count(args);
  }

  async progresses<T extends Prisma.ProgressFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProgressFindManyArgs>
  ): Promise<PrismaProgress[]> {
    return this.prisma.progress.findMany<Prisma.ProgressFindManyArgs>(args);
  }
  async progress<T extends Prisma.ProgressFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProgressFindUniqueArgs>
  ): Promise<PrismaProgress | null> {
    return this.prisma.progress.findUnique(args);
  }
  async createProgress<T extends Prisma.ProgressCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProgressCreateArgs>
  ): Promise<PrismaProgress> {
    return this.prisma.progress.create<T>(args);
  }
  async updateProgress<T extends Prisma.ProgressUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProgressUpdateArgs>
  ): Promise<PrismaProgress> {
    return this.prisma.progress.update<T>(args);
  }
  async deleteProgress<T extends Prisma.ProgressDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProgressDeleteArgs>
  ): Promise<PrismaProgress> {
    return this.prisma.progress.delete(args);
  }

  async getGame(parentId: string): Promise<PrismaGame | null> {
    return this.prisma.progress
      .findUnique({
        where: { id: parentId },
      })
      .game();
  }

  async getScene(parentId: string): Promise<PrismaScene | null> {
    return this.prisma.progress
      .findUnique({
        where: { id: parentId },
      })
      .scene();
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.progress
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}