import { User } from "../../src/common/entities";
import Providers from "../../src/modules/v1/auth/types/providers.enum";

export const LocalUser: Partial<User> = {
    provider: Providers.Local,
    providerId: null,
    email: 'test@email.com',
    firstName: 'Witek',
    lastName: 'Wojtyła',
    displayName: 'Witq',
    password: 'keyboardcat'
}

export const FacebookUser: Partial<User> = {
    provider: Providers.Facebook,
    providerId: '78247816745184',
    email: 'test2@email.com',
    firstName: 'Wojtek',
    lastName: 'Kojtyła',
    displayName: 'Papaj',
    password: 'secretword'
}

export const GoogleUser: Partial<User> = {
    provider: Providers.Google,
    providerId: '134712471265132',
    email: 'test3@email.com',
    firstName: 'Varian',
    lastName: 'Wrynn',
    displayName: 'Vrynn77',
    password: 'anduin'
}

export const NewUser: Partial<User> = {
    provider: Providers.Local,
    providerId: null,
    email: 'test4@email.com',
    firstName: 'Adam',
    lastName: 'Koryncki',
    displayName: 'Adaś',
    password: 'hamslomamslo'
}
export const testUsers: Array<Partial<User>> = [
    LocalUser,
    FacebookUser,
    GoogleUser
]