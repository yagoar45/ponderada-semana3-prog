import { Test, TestingModule } from '@nestjs/testing';
import { Animal } from 'src/animal.entity';
import { ZooService } from './zoo.service';

describe('ZooService', () => {
  let service: ZooService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ZooService],
    }).compile();

    service = module.get<ZooService>(ZooService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create an animal', () => {
    const animal: Animal = {
      id: 1,
      name: 'Elephant',
      species: 'Mammal',
      happiness: 70,
    };
    const createdAnimal = service.createAnimal(animal);
    expect(createdAnimal).toBeDefined();
  });

  it('should handle invalid input when creating an animal', () => {
    const invalidAnimal = {
      id: 0,
      happiness: 0,
    };
    expect(() => service.createAnimal(invalidAnimal as Animal)).toThrowError(
      'O animal deve ter todas as características da entidade Animal.',
    );
  });
});
