import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 255, type: "varchar" })
  name: string;

  @Column({ length: 255, unique: true, type: "varchar" })
  email: string;
}
