import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { GetAllCharactersRequestDto } from './dtos/GetAllCharactersRequest.dto';
import { GetAllCharactersResponseDto } from './dtos/GetAllCharactersResponse.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllCharacters(
    @Query() query: GetAllCharactersRequestDto,
  ): Promise<GetAllCharactersResponseDto> {
    console.log(query);
    return this.appService.getAllCharacters(query);
  }
}
