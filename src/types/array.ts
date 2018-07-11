import { IType } from './primitive'

export default class ArrayType implements IType {
	private readonly childType: IType

	constructor(childType: IType) {
		this.childType = childType
	}

	public isValid(thing: any[]) {
    return thing.every(item => this.childType.isValid(item))
	}
}
