export interface FirestoreEntity {
  uid: string;
}

export interface TaskEntity extends FirestoreEntity {
  title: string;
  userId: string;
}
