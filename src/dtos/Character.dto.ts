import { CharacterGender } from 'src/enum/CharacterGender.enum';
import { CharacterStatus } from 'src/enum/CharacterStatus.enum';

export class CharacterDto {
  id: number;
  name: string;
  status: CharacterStatus;
  species: string;
  type: string;
  gender: CharacterGender;
  origin: {
    name: string;
    url: string
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}
