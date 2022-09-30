import { CafeEntity } from '../cafe/cafe.entity';
import { Column, Entity, ManyToMany } from 'typeorm';

@Entity()
export class TiendaEntity {

 @Column()
 id: number;

 @Column()
 nombre: string;
 
 @Column()
 direccion: string;
 
 @Column()
 telefono: string;

 @ManyToMany(() => CafeEntity, cafe => cafe.tiendas)
 cafes: CafeEntity[];
}
