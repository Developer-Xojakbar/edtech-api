import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  getAllCourses() {
    return this.coursesService.getAllCourses();
  }

  @Get(':id')
  getCourse(@Param('id') id: number) {
    return this.coursesService.getCourseById(id);
  }

  @Post()
  createCourse(
    @Body() data: { title: string; description: string; price: number },
  ) {
    return this.coursesService.createCourse(data);
  }

  @Delete(':id')
  deleteCourse(@Param('id') id: number) {
    return this.coursesService.deleteCourse(id);
  }
}
