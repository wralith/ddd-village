import crypto from "crypto"

export class Entity<T> {
  readonly id: string
  protected props: T

  constructor(props: T, id?: string) {
    this.props = props
    this.id = id ?? crypto.randomBytes(4).toString("hex")
  }
}
