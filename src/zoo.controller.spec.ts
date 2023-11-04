import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './app.module';

describe('ZooController (e2e)', () => {
  let app: INestApplication;
  const zooService = {
    createAnimal: jest.fn(),
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(zooService)
      .useValue(zooService)
      .compile();

    app = module.createNestApplication();
    await app.init();
  });

  it('/zoo/animal (POST)', async () => {
    const animal = {
      id: 1,
      name: 'Elephant',
      species: 'Mammal',
      happiness: 70,
    };
    zooService.createAnimal.mockReturnValue(animal);
    return request(app.getHttpServer())
      .post('/zoo/animal')
      .send(animal)
      .expect(201)
      .expect({ ...animal, id: 1 });
  });

  it('/zoo/animal (POST) - Should handle invalid input', async () => {
    const invalidAnimal = {
      happiness: 60,
    };
    return request(app.getHttpServer())
      .post('/zoo/animal')
      .send(invalidAnimal)
      .expect(500);
  });
});
