import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class NotificationsService {
  constructor(private prisma: PrismaService) {}

  async sendCourseReminder(userId: number) {
    const lastVisit = await this.prisma.enrollment.findFirst({
      where: { userId },
      orderBy: { lastVisited: 'desc' },
    });

    if (!lastVisit) return { message: 'Фойдаланувчи курсда эмас' };

    const daysSinceLastVisit = Math.floor(
      (Date.now() - new Date(lastVisit.lastVisited).getTime()) /
        (1000 * 60 * 60 * 24),
    );

    if ([2, 4, 6].includes(daysSinceLastVisit)) {
      return {
        message: `Сиз ${daysSinceLastVisit} кун давомида курсга қатнашмадингиз, давом этинг!`,
      };
    }

    return { message: 'Ҳозирча хабар йўқ' };
  }
}
