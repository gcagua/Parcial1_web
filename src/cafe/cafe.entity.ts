import { TiendaEntity } from 'src/tienda/tienda.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CafeEntity {

 @Column()
 id: number;

 @Column()
 nombre: string;
 
 @Column()
 descripcion: string;
 
 @Column()
 precio: number;
 
 @ManyToMany(() => TiendaEntity, tienda => tienda.cafes)
 tiendas: TiendaEntity[];
}
