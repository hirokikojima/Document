export enum PromiseStatus {
  Pending,
  Success,
  Error
}

export default class SuspenseResource<T> {
  private promise: Promise<T>
  private status: PromiseStatus
  private value: T | undefined
  
  constructor(promise: Promise<T>) {
    this.promise = promise
    this.status = PromiseStatus.Pending

    this.promise.then(
      (value) => {
        this.status = PromiseStatus.Success
        this.value = value
      },
      (error) => {
        this.status = PromiseStatus.Error
        this.value = error
      }
    )
  }

  read() {
    switch(this.status) {
      case PromiseStatus.Pending:
        throw this.promise
      case PromiseStatus.Success:
        throw this.value
      case PromiseStatus.Error:
        return this.value
    }
  }
}