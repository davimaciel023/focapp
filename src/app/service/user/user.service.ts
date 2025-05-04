// src/app/service/user/user.service.ts
import { Injectable } from '@angular/core';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore: Firestore) {}

  addUser(user: any) {
    const userRef = doc(this.firestore, 'users', user.uid); // UID é o ID do documento
    return setDoc(userRef, user);
  }
}
