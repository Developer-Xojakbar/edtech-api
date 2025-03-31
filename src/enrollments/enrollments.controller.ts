import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { EnrollmentsService } from './enrollments.service';

@Controller('enrollments')
export class EnrollmentsController {
  constructor(private readonly enrollmentsService: EnrollmentsService) {}

  @Post()
  enrollUser(@Body() data: { userId: string; courseId: string }) {
    return this.enrollmentsService.enrollUser(data.userId, data.courseId);
  }

  @Get(':userId')
  getUserEnrollments(@Param('userId') userId: string) {
    return this.enrollmentsService.getUserEnrollments(userId);
  }
}
