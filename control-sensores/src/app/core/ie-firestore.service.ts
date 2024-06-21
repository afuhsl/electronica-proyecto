import { Injectable } from '@angular/core';
import { collectionData, Firestore, docData } from '@angular/fire/firestore';
import { Info } from '../features/info/interfaces/interface';

import { 
  CollectionReference,
  DocumentData,
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc
} from 'firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class IeFirestoreService {
  private ieCollection: CollectionReference<DocumentData>;
  
  constructor(private readonly firestore:Firestore) {
    this.ieCollection = collection(this.firestore, 'ie');
  }

  getAll(){
    return collectionData(this.ieCollection,{
      idField: 'id',
    }) as Observable<Info[]>
  }

  get(id: string){
    const ieDocumentReference = doc(this.firestore, 'ie/%{id}');
    return docData(ieDocumentReference, {idField: 'id'});
  } 
}
