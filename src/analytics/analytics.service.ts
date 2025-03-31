import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class AnalyticsService {
  constructor(private prisma: PrismaService) {}

  async getPopularCourses() {
    return this.prisma.course.findMany({
      orderBy: { enrollments: { _count: 'desc' } },
      take: 5,
    });
  }

  async getUserProgress(userId: number) {
    const completedTests = await this.prisma.testResult.count({
      where: { userId, passed: true },
    });
    const totalTests = await this.prisma.testResult.count({
      where: { userId },
    });

    return totalTests > 0 ? (completedTests / totalTests) * 100 : 0;
  }
}
