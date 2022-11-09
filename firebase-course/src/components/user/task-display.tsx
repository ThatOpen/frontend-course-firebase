import { getApp } from "firebase/app";
import { deleteDoc, doc, getFirestore } from "firebase/firestore";
import {
  deleteObject,
  getDownloadURL,
  getStorage,
  ref,
} from "firebase/storage";
import { FC, useEffect, useState } from "react";
import { TaskEntity } from "../../types/firestore-types";

export const TaskDisplay: FC<{ task: TaskEntity }> = ({ task }) => {
  const { title, fileName } = task;
  const appInstance = getApp();
  const dbInstance = getFirestore(getApp());
  const storageInstance = getStorage(appInstance);
  const [fileUrl, setFileUrl] = useState("");
  const fileRef = ref(storageInstance, fileName);

  useEffect(() => {
    debugger;
    const retrieveUrl = async () => {
      const fileUrl = await getDownloadURL(fileRef);
      setFileUrl(fileUrl);
    };
    retrieveUrl();
  }, [fileRef]);

  const onDeleteTask = async (taskId: string) => {
    await Promise.all([
      deleteDoc(doc(dbInstance, "tasks", taskId)),
      deleteObject(fileRef),
    ]);
  };

  return (
    <li>
      <span>{title} </span>
      <img src={fileUrl} height="100" alt={fileName} />
      <button onClick={() => onDeleteTask(task.uid)}>Delete</button>
    </li>
  );
};
