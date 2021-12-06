export class User{
  id:number = 0;
  name:string = "";
  email:string = "";
  password:string = "";

  constructor(id:number, name:string, email:string, password:string){
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }
}