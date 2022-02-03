import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { GetAllCharactersRequestDto } from './dtos/GetAllCharactersRequest.dto';
import { GetAllCharactersResponseDto } from './dtos/GetAllCharactersResponse.dto';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}

  async getAllCharacters({
    page = 1,
    limit = 5,
  }: GetAllCharactersRequestDto): Promise<GetAllCharactersResponseDto> {
    const { data } = await this.httpService
      .get(`https://rickandmortyapi.com/api/character`)
      .toPromise();

    return data;
  }
}
