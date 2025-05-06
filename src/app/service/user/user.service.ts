// src/app/service/user/user.service.ts
import { Injectable } from '@angular/core';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';
import { getDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore: Firestore) {}

  addUser(user: any) {
    const userRef = doc(this.firestore, 'users', user.uid);
    return setDoc(userRef, user);
  }

  getUserByUid(uid: string) {
    const userDocRef = doc(this.firestore, `users/${uid}`);
    return getDoc(userDocRef);
  }


}
