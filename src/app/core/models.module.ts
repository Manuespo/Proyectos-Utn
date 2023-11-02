import { ITravel, IUser } from "./entity";

export class Travel implements ITravel {
    "id": 0;
    "provincia": '';
    "lugar": '';
    "actividades_que_se_realizan": '';
    "imagen": '';
    "descripcion": '';
    constructor(travel?: any) {
        this.id = travel.id != null ? travel.id : null;
        this.provincia = travel.provincia != null ? travel.provincia : null;
        this.lugar = travel.lugar != null ? travel.lugar : null;
        this.actividades_que_se_realizan = travel.actividades_que_se_realizan != null ? travel.actividades_que_se_realizan : null;
        this.imagen = travel.imagen != null ? travel.imagen : null;
        this.descripcion = travel.descripcion != null ? travel.descripcion : null;
    }
}
export class User implements IUser {
    "id": 0;
    "lastName": '';
    "name": '';
    "dni": '';
    "fechaNac": '';
    "email": '';
    "userName": '';
    "password": '';
    constructor(user?: any) {
        this.id = user.id != null ? user.id : null;
        this.lastName = user.lastName != null ? user.lastName : null;
        this.name = user.name != null ? user.name : null;
        this.dni = user.dni != null ? user.dni : null;
        this.fechaNac = user.fechaNac != null ? user.fechaNac : null;
        this.email = user.email != null ? user.email : null;
        this.userName = user.userName != null ? user.userName : null;
        this.password = user.password != null ? user.password : null;
    }
}
