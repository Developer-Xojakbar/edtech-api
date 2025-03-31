import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class TestsService {
  constructor(private prisma: PrismaService) {}

  async submitTestResult(userId: string, testId: string, passed: boolean) {
    await this.prisma.testResult.create({ data: { userId, testId, passed } });

    if (passed) {
      await this.prisma.user.update({
        where: { id: userId },
        data: { coins: { increment: 10 } },
      });
    }

    return {
      success: true,
      message: passed ? 'Коинлар берилди' : 'Тест ўтмади',
    };
  }
}
