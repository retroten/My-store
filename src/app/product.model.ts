export interface products{
    id: string;
    title: string;
    price: number;
    image: string;
    description: string;
    rating: rating;
    category:string;   
}


export interface rating {
    rate:number;
    count: number;
  }