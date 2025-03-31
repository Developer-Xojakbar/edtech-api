import { Controller, Post, Body } from '@nestjs/common';
import { TestsService } from './tests.service';

@Controller('tests')
export class TestsController {
  constructor(private readonly testsService: TestsService) {}

  @Post('submit')
  submitTest(
    @Body() data: { userId: number; testId: number; passed: boolean },
  ) {
    return this.testsService.submitTestResult(
      data.userId,
      data.testId,
      data.passed,
    );
  }
}
