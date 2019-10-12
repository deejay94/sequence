import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class SequenceService {

  SERVER_URL: string = "http://localhost:8080/api/";

  constructor(private httpClient: HttpClient) { }


  public createSequence(sequence) {
    return this.httpClient.post(`${this.SERVER_URL + 'sequences'}`, sequence)
  }
}
