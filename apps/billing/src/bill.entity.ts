import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Bill {
	@PrimaryGeneratedColumn()
	reference: number;

	@Column()
	order: number;

	@Column()
	amount: number;

	@Column()
	timestamp: Date;
}
