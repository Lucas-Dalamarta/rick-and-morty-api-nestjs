import { CharacterDto } from './Character.dto';
import { CharacterResponseInfoDto } from './CharacterResponseInfo.dto';

export class GetAllCharactersResponseDto {
  info: CharacterResponseInfoDto;
  result: CharacterDto[];
}
