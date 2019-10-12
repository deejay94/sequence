import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  createDb(){    

    let  sequences =  [
     
    ];
 
    return {sequences};
 
   }

   genId(sequences): number {
    return sequences.length > 0 ? Math.max(...sequences.map(sequence => sequence.id)) + 1 : 11;
  }
}
