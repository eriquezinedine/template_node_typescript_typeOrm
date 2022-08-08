// import {Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity } from 'typeorm'

// @Entity('user')
// export class User  extends BaseEntity {
    
//     @PrimaryGeneratedColumn()
//     id: number = 0

//     @Column()
//     firstname: string = ''

//     @Column()
//     lastname: string = ''

//     @Column({
//         default:true
//     })
//     active?: boolean

//     @CreateDateColumn()
//     createdAt:Date = new Date();

//     @UpdateDateColumn()
//     updatedAd:Date = new Date();
// }

import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    CreateDateColumn,
    UpdateDateColumn,
  } from "typeorm";
  
  //* BaseEntity
  /* 
    Nos sirve para consultar cosas como optener usuario, eliminarlos etc
    Es solo una forma de hacer estas operaciones
  */
  @Entity()
  export class User extends BaseEntity {
    @PrimaryGeneratedColumn() //* Id auto incrementable
    id: number;
  
    @Column()
    firstname: string;
  
    @Column()
    lastname: string;
  
    @Column({ default: true }) //* Valor por defecto
    active: boolean;
  
    @CreateDateColumn()
    createdAt:Date = new Date();

    @UpdateDateColumn()
    updatedAd:Date = new Date();
  }