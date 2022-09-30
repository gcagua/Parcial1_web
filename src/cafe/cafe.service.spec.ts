import { Test, TestingModule } from '@nestjs/testing';
import { CafeService } from './cafe.service';
import { TypeOrmTestingConfig } from '../shared/testing-utils/typeorm-testing-config';
import { CafeEntity } from './cafe.entity';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';

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
});
