import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  getAll() {
    return this.prisma.task.findMany();
  }

  getOne(id: number) {
    return this.prisma.task.findUnique({ where: { id } });
  }
}
