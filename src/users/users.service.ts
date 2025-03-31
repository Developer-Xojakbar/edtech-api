import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getAllUsers() {
    return this.prisma.user.findMany();
  }

  async getUserById(id: string) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async createUser(data: { email: string; name?: string }) {
    return this.prisma.user.create({ data });
  }

  async deleteUser(id: string) {
    return this.prisma.user.delete({ where: { id } });
  }
}
