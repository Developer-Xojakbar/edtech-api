import { Controller, Get, Param } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';

@Controller('analytics')
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Get('popular-courses')
  getPopularCourses() {
    return this.analyticsService.getPopularCourses();
  }

  @Get('progress/:userId')
  getUserProgress(@Param('userId') userId: number) {
    return this.analyticsService.getUserProgress(userId);
  }
}
