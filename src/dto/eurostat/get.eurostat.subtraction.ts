import { ApiProperty } from '@nestjs/swagger';

export class GetAnyEurostatData {
  @ApiProperty()
  year: number;

  @ApiProperty()
  nationality: string;
}
