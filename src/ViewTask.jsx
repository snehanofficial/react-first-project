import { useParams } from "react-router-dom";

export default function ViewTask({ components = [] }) {
  const { task, id } = useParams();
  if (!task) return <div>No task specified</div>;

  const key = (task || "").toLowerCase();
  const entry = components.find((c) => (c.name || "").toLowerCase() === key);

  if (!entry) return <div>Task "{task}" not found</div>;

  const Component = entry.component;
  return <Component taskName={task} taskId={id} />;
}