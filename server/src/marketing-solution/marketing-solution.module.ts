import { Module } from '@nestjs/common';
import { MarketingSolutionService } from './marketing-solution.service';
import { MarketingSolutionController } from './marketing-solution.controller';

@Module({
  controllers: [MarketingSolutionController],
  providers: [MarketingSolutionService]
})
export class MarketingSolutionModule {}
