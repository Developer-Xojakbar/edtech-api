import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { CoursesModule } from './courses/courses.module';
import { UsersModule } from './users/users.module';
import { EnrollmentsModule } from './enrollments/enrollments.module';
import { AnalyticsModule } from './analytics/analytics.module';
import { NotificationsModule } from './notifications/notifications.module';

@Module({
  imports: [
    CoursesModule,
    UsersModule,
    EnrollmentsModule,
    AnalyticsModule,
    NotificationsModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}
