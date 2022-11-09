import { getApp } from "firebase/app";
import {
  collection,
  getFirestore,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { FC, useEffect, useState } from "react";
import { TaskEntity } from "../../types/firestore-types";
import { useUserContext } from "../../user-provider";
import { TaskDisplay } from "./task-display";

export const TaskList: FC = () => {
  const [tasks, setTasks] = useState<TaskEntity[]>([]);
  const dbInstance = getFirestore(getApp());
  const [user] = useUserContext();
  const q = query(
    collection(dbInstance, "tasks"),
    where("userId", "==", user?.uid)
  );

  useEffect(() => {
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const result: TaskEntity[] = [];
      snapshot.docs.forEach((doc) => {
        result.push({ ...(doc.data() as TaskEntity), uid: doc.id });
      });
      setTasks(result);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      {Boolean(tasks.length) ? (
        <ul>
          {tasks.map((task) => {
            return <TaskDisplay key={task.uid} task={task} />;
          })}
        </ul>
      ) : (
        <p>No tasks available</p>
      )}
    </div>
  );
};
