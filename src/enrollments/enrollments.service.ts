import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class EnrollmentsService {
  constructor(private prisma: PrismaService) {}

  async enrollUser(userId: string, courseId: string) {
    return this.prisma.enrollment.create({
      data: {
        userId,
        courseId,
      },
    });
  }

  async getUserEnrollments(userId: string) {
    return this.prisma.enrollment.findMany({
      where: { userId },
      include: { course: true },
    });
  }
}
