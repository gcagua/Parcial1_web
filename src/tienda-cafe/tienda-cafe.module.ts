import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TiendaService } from 'src/tienda/tienda.service';
import { TiendaEntity } from '../tienda/tienda.entity';
import { TiendaCafeService } from './tienda-cafe.service';

@Module({
  imports:[TypeOrmModule.forFeature([TiendaEntity])],
  providers: [TiendaService]
})
export class TiendaCafeModule {}
