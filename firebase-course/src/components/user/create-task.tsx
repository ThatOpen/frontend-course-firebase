import { getApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { FC, FormEvent, useState } from "react";
import { useUserContext } from "../../user-provider";

export const CreateTask: FC = () => {
  const [title, setTitle] = useState<string>("");
  const dbInstance = getFirestore(getApp());
  const [user] = useUserContext();

  const onCreateTask = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    ev.stopPropagation();
    await addDoc(collection(dbInstance, "tasks"), {
      title: title,
      userId: user?.uid,
    });
    setTitle("");
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

      <button type="submit" className="coolButton orangeButton">
        Create new task
      </button>
    </form>
  );
};
