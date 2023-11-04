import { Injectable } from '@nestjs/common';
import { Animal } from './animal.entity';

@Injectable()
export class ZooService {
  private animals: Animal[] = [];
  private enclosures: Record<string, Animal[]> = {};
  private visitors: number = 0;

  createAnimal(animal: Animal): Animal {
    if (
      animal.name === undefined ||
      animal.species === undefined ||
      animal.happiness === undefined
    ) {
      throw new Error(
        'O animal deve ter todas as características da entidade Animal.',
      );
    }

    animal.id = this.animals.length + 1;
    this.animals.push(animal);
    return animal;
  }

  createEnclosure(species: string): void {
    if (!this.enclosures[species]) {
      this.enclosures[species] = [];
    }
  }

  addAnimalToEnclosure(animalId: number, species: string): void {
    const animal = this.animals.find((a) => a.id === animalId);
    if (animal && this.enclosures[species]) {
      this.enclosures[species].push(animal);
    }
  }

  feedAnimal(animalId: number, happinessBoost: number): Animal {
    const animal = this.animals.find((a) => a.id === animalId);
    if (animal) {
      animal.happiness += happinessBoost;
      return animal;
    }
  }

  receiveVisitors(): number {
    let totalHappiness = 0;

    this.animals.forEach((animal) => {
      totalHappiness += animal.happiness;
    });

    for (const species in this.enclosures) {
      if (this.enclosures.hasOwnProperty(species)) {
        const animalsInEnclosure = this.enclosures[species];
        animalsInEnclosure.forEach((animal) => {
          totalHappiness += animal.happiness;
        });
      }
    }

    this.visitors = Math.floor(totalHappiness / 10);
    return this.visitors;
  }
}
