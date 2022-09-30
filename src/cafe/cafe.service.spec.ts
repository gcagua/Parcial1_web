import { Test, TestingModule } from '@nestjs/testing';
import { CafeService } from './cafe.service';
import { TypeOrmTestingConfig } from '../shared/testing-utils/typeorm-testing-config';
import { CafeEntity } from './cafe.entity';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { faker } from '@faker-js/faker';

describe('CafeService', () => {
  let service: CafeService;
  let repository: Repository<CafeEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [...TypeOrmTestingConfig()],
      providers: [CafeService],
    }).compile();

    service = module.get<CafeService>(CafeService);
    repository = module.get<Repository<CafeEntity>>(getRepositoryToken(CafeEntity));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('create should return a new museum', async () => {
    const cafe: CafeEntity = {
      id: 0,
      nombre: faker.datatype.string(),
      descripcion: faker.datatype.string(),
      precio: faker.datatype.number(),
      tiendas: []
    }
 
    const newCafe: CafeEntity = await service.create(cafe);
    expect(newCafe).not.toBeNull();
 
    const storedCafe: CafeEntity = await repository.findOne({where: {id: newCafe.id}})
    expect(storedCafe).not.toBeNull();
    expect(storedCafe.nombre).toEqual(storedCafe.nombre)
  });
});
