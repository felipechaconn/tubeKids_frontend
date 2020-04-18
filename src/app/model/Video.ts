import { User } from './User';

export  interface  Video {
    id_video?: number;
    name_video?: string;
    description_video?: string;
    link_video?: string;
    creator?: User;
  
}