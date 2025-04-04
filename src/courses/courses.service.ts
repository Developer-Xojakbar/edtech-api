import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class CoursesService {
  constructor(private prisma: PrismaService) {}

  async getAllCourses() {
    return this.prisma.course.findMany();
  }

  async getCourseById(id: number) {
    return this.prisma.course.findUnique({ where: { id } });
  }

  async createCourse(data: {
    title: string;
    description: string;
    price: number;
  }) {
    return this.prisma.course.create({ data });
  }

  async deleteCourse(id: number) {
    return this.prisma.course.delete({ where: { id } });
  }
}
