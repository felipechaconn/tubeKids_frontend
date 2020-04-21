import { User } from './User';

export  interface  Kid {
    id_kid?: number;
    firstName_kid?: string;
    username_kid?: string;
    birthday_kid?:Date;
    pin_kid?: number;
    creator?: User;
  
}