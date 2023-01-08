import { Collection } from "../framework/Collection"
import { Citizen, Outsider } from "./Types"

export class Population {
  citizens: Collection<Citizen>
  outsiders: Collection<Outsider>

  constructor(citizens?: Citizen[], outsiders?: Outsider[]) {
    this.citizens = new Collection(citizens)
    this.outsiders = new Collection(outsiders)
  }

  currentPeople() {
    return this.citizens.size + this.outsiders.size
  }

  currentCitizens() {
    return this.citizens.size
  }

  currentOutsiders() {
    return this.outsiders.size
  }

  checkIn(person: Citizen | Outsider) {
    person instanceof Citizen
      ? this.citizens.create(person)
      : this.outsiders.create(person)
  }

  checkOut(person: Citizen | Outsider) {
    person instanceof Citizen
      ? this.citizens.delete(person.id)
      : this.outsiders.delete(person.id)
  }
}
