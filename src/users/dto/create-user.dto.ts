import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'test@gmail.com', description: 'email address' })
  readonly email: string;

  @ApiProperty({
    example: '&pa*33ddv#(jsjns3jn*2@lsvk',
    description: 'password',
  })
  readonly password: string;
}
