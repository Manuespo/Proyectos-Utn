export interface ITravel {
    "id": number | null,
    "provincia": string | null,
    "lugar": string | null,
    "actividades_que_se_realizan": string | null,
    "imagen": string | null,
    "descripcion": string | null,
}
export interface IUser {
    "id": number | null,
    "lastName": string | null,
    "name": string | null,
    "dni": string | null,
    "fechaNac": string | null,
    "email": string | null,
    "userName": string | null,
    "password": string | null
}
