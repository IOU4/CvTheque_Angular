import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocService {

  constructor() { }

  docUrl?:string = '';
}
