import { SetOptional } from 'type-fest'

import { Newline, NewlineAST, Token, Raws } from '..'

export interface SectionHeaderAST {
	type: 'SectionHeader'
	name: NonNullable<string>
	newline: SetOptional<NewlineAST, 'type'>
	raws: Raws
}

export class SectionHeader implements Token {
	public readonly type = 'SectionHeader'
	public name: SectionHeaderAST['name']
	public newline: Newline
	public raws: Raws

	public constructor(ast: SetOptional<SectionHeaderAST, 'type'>) {
		this.name = ast.name
		this.newline = new Newline(ast.newline)
		this.raws = ast.raws
	}

	public toString() {
		return (
			this.raws.before +
			'[' +
			this.name +
			']' +
			this.raws.after +
			this.newline
		)
	}

	public pretty() {
		return `[${this.name}]${this.newline.pretty()}`
	}

	public toAST(): SectionHeaderAST {
		return {
			type: this.type,
			name: this.name,
			newline: this.newline.toAST(),
			raws: this.raws,
		}
	}
}
