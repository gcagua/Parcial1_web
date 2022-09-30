import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { TypeOrmTestingConfig } from '../shared/testing-utils/typeorm-testing-config';
import { Repository } from 'typeorm';
import { TiendaEntity } from './tienda.entity';
import { TiendaService } from './tienda.service';
import { faker } from '@faker-js/faker';

describe('TiendaService', () => {
  let service: TiendaService;
 let repository: Repository<TiendaEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [...TypeOrmTestingConfig()],
      providers: [TiendaService],
    }).compile();

    service = module.get<TiendaService>(TiendaService);
    repository = module.get<Repository<TiendaEntity>>(getRepositoryToken(TiendaEntity));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('create should return a new museum', async () => {
    const tienda: TiendaEntity = {
      id: 0,
      nombre: faker.datatype.string(),
      direccion: faker.datatype.string(),
      telefono: faker.datatype.string(),
      cafes: []
    }
    const newTienda: TiendaEntity = await service.create(tienda);
    expect(newTienda).not.toBeNull();
 
    const storedTienda: TiendaEntity = await repository.findOne({where: {id: newTienda.id}})
    expect(storedTienda).not.toBeNull();
    expect(storedTienda.nombre).toEqual(storedTienda.nombre)
  });
});
