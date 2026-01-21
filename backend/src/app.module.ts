import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { VariantsModule } from './variants/variants.module';
import { PdfModule } from './pdf/pdf.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [TasksModule, VariantsModule, PdfModule],
  providers: [PrismaService],
})
export class AppModule {}
