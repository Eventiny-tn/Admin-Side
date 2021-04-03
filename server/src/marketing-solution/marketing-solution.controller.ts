import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MarketingSolutionService } from './marketing-solution.service';

@Controller('marketing-solution')
export class MarketingSolutionController {
  constructor(
    private readonly marketingSolutionService: MarketingSolutionService,
  ) {}
}
