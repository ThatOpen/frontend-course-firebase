import { getApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { ChangeEvent, FC, FormEvent, useState } from "react";
import { useUserContext } from "../../user-provider";

export const CreateTask: FC = () => {
  const [title, setTitle] = useState<string>("");
  const [file, setFile] = useState<File | null>();
  const appInstance = getApp();
  const dbInstance = getFirestore(appInstance);
  const storageInstance = getStorage(appInstance);
  const [user] = useUserContext();

  const onCreateTask = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    ev.stopPropagation();
    if (!file || !title) {
      return;
    }
    const fileName = file.name;
    const fileRef = ref(storageInstance, fileName);
    const createTaskPromise = addDoc(collection(dbInstance, "tasks"), {
      title: title,
      userId: user?.uid,
      fileName,
    });
    const uploadFilePromise = uploadBytes(fileRef, file);
    await Promise.all([createTaskPromise, uploadFilePromise]);
    await setTitle("");
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event?.target?.files && event?.target?.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  return (
    <form onSubmit={onCreateTask} className="contentFlexVertical">
      <input
        type="title"
        className="coolField"
        placeholder="New task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <input onChange={handleFileChange} type="file" accept=".png" />
      <button type="submit" className="coolButton orangeButton">
        Create new task
      </button>
    </form>
  );
};
