import { Controller, Get, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';

// API заданий
@Controller('tasks')
export class TasksController {
  constructor(private service: TasksService) {}

  @Get()
  getAll() {
    return this.service.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.service.getOne(+id);
  }
}
