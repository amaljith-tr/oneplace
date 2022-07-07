import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { CandidateServiceBase } from "./base/candidate.service.base";

@Injectable()
export class CandidateService extends CandidateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
