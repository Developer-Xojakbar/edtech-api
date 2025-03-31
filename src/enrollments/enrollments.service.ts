import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class EnrollmentsService {
  constructor(private prisma: PrismaService) {}

  async enrollUser(userId: number, courseId: number) {
    return this.prisma.enrollment.create({
      data: {
        userId,
        courseId,
      },
    });
  }

  async getUserEnrollments(userId: number) {
    return this.prisma.enrollment.findMany({
      where: { userId },
      include: { course: true },
    });
  }
}
