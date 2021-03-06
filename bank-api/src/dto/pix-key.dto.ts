import { IsIn, IsNotEmpty, IsString } from 'class-validator';
import { PixKeyKind } from '../models/pix-key.model';

export class PixKeyDto {
  @IsString()
  @IsNotEmpty()
  readonly key: string;

  @IsString()
  @IsIn(Object.values(PixKeyKind))
  @IsNotEmpty()
  readonly kind: PixKeyKind;
}
