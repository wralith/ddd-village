import { Entity } from "../framework/Entity"

// This file is an incubator for little value objects and entities,
// All those types and classes will have their own places in the future!!

type Profession =
  | "farmer"
  | "warrior"
  | "hunter"
  | "carpenter"
  | "chef"
  | "none"

type NeighborVillage = "Mushroom Hill" | "Blue Honey" | "Unknown Realm"

type CitizenProps = {
  name: string
  profession: Profession
  age: number
}

export class Citizen extends Entity<CitizenProps> {}

type OutsiderProps = { from: NeighborVillage }

export class Outsider extends Entity<OutsiderProps> {}
