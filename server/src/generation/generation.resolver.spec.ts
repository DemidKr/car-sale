import { Test, TestingModule } from '@nestjs/testing';
import { GenerationResolver } from './generation.resolver';
import { GenerationService } from './generation.service';

describe('GenerationResolver', () => {
  let resolver: GenerationResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GenerationResolver, GenerationService],
    }).compile();

    resolver = module.get<GenerationResolver>(GenerationResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
