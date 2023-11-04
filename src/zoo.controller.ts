import { Controller, Post, Body, Param, Get } from '@nestjs/common';
import { Animal } from './animal.entity';
import { ZooService } from './zoo.service';

@Controller('zoo')
export class ZooController {
  constructor(private readonly zooService: ZooService) {}

  @Post('/animal')
  createAnimal(@Body() animal: Animal): Animal {
    return this.zooService.createAnimal(animal);
  }

  @Post('/enclosure/:species')
  createEnclosure(@Param('species') species: string): void {
    this.zooService.createEnclosure(species);
  }

  @Post('/enclosure/:species/animal/:animalId')
  addAnimalToEnclosure(
    @Param('species') species: string,
    @Param('animalId') animalId: number,
  ): void {
    this.zooService.addAnimalToEnclosure(animalId, species);
  }

  @Post('/animal/:animalId/feed/:happinessBoost')
  feedAnimal(
    @Param('animalId') animalId: number,
    @Param('happinessBoost') happinessBoost: number,
  ): Animal {
    return this.zooService.feedAnimal(animalId, happinessBoost);
  }

  @Get('/visitors')
  receiveVisitors(): number {
    return this.zooService.receiveVisitors();
  }
}
