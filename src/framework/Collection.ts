export class Collection<T extends { id: string }> {
  private map: Map<string, T>

  constructor(data?: Map<string, T> | T[]) {
    data instanceof Map ? (this.map = data) : (this.map = new Map())

    if (data instanceof Array) {
      data.forEach((d) => this.create(d))
    }
  }

  get(id: string): T | undefined {
    return this.map.get(id)
  }

  create(data: T) {
    if (!this.map.has(data.id)) {
      this.map.set(data.id, data)
    }
  }

  update(data: T) {
    if (this.map.has(data.id)) {
      this.map.set(data.id, data)
    }
  }

  delete(id: string) {
    if (this.map.has(id)) {
      this.map.delete(id)
    }
  }

  get size() {
    return this.map.size
  }
}
