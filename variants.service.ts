import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

// Генерация случайного варианта
@Injectable()
export class VariantsService {
  constructor(private prisma: PrismaService) {}

  async generate(exam: 'OGE' | 'EGE') {
    const tasks = await this.prisma.task.findMany({ where: { exam } });
    return tasks.sort(() => 0.5 - Math.random()).slice(0, 15);
  }
}
