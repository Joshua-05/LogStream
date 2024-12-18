export interface IGeo {
    lat: string,
    lng: string
}

export interface IAddress {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: IGeo
}

export interface IUser{
    id: number,
    name: string,
    username: string,
    email: string,
    address: IAddress
}

export interface UserCardProps{
    users: IUser
}