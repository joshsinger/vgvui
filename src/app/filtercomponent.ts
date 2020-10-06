export abstract class FilterComponent {

	type: string;

	abstract theMessage(): string;

	constructor(type: string) {
		this.type = type;
	}
}
