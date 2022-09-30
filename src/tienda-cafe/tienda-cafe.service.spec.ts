import { Test, TestingModule } from '@nestjs/testing';
import { TiendaEntity } from '../tienda/tienda.entity';
import { Repository } from 'typeorm';
import { TiendaCafeService } from './tienda-cafe.service';
import { CafeEntity } from '../cafe/cafe.entity';
import { faker } from '@faker-js/faker';

describe('TiendaCafeService', () => {
  let service: TiendaCafeService;
  let tiendaRepository: Repository<TiendaEntity>;
  let cafeRepository: Repository<CafeEntity>;
  let tienda: TiendaEntity;
  let cafesList : CafeEntity[];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TiendaCafeService],
    }).compile();

    service = module.get<TiendaCafeService>(TiendaCafeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('addCafeTienda should add an artwork to a museum', async () => {
    const newCafe: CafeEntity = await cafeRepository.save({
      id: 0,
      nombre: faker.datatype.string(),
      descripcion: faker.datatype.string(),
      precio: faker.datatype.number(),
      tiendas: []
    });
 
    const newTienda: TiendaEntity = await tiendaRepository.save({
      id: 0,
      nombre: faker.datatype.string(),
      direccion: faker.datatype.string(),
      telefono: faker.datatype.string(),
      cafes: []
    })
 
    const result: TiendaEntity = await service.addCafeToTienda(newTienda.id, newCafe.id);
   
    expect(result.cafes.length).toBe(1);
    expect(result.cafes[0]).not.toBeNull();
    expect(result.cafes[0].nombre).toBe(newCafe.nombre)
    expect(result.cafes[0].descripcion).toBe(newCafe.descripcion)
  });
});
