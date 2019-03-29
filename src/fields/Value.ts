import { IFieldExcludeKind, IField } from './types'
import { Field } from './Field'

export abstract class Value<P> {
  public value: P
  public field: Field

  public abstract get presentation(): string
  public abstract get kind(): any

  constructor(value: P, field: IFieldExcludeKind<IField>) {
    this.value = value
    this.field = new Field(field)
  }

  public abstract clone(value: P): Value<P>
}
