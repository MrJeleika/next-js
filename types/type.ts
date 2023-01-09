export interface Contact {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zip: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface Post{
  userId:number
  id: number
  title: string
  body: string
}

export interface Social{
  id: number;
  icon: string;
  path: string;
}