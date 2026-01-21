export default async function TaskPage({ params }) {
  const res = await fetch(`http://backend:3001/tasks/${params.id}`);
  const task = await res.json();

  return (
    <div className="bg-white border p-4">
      <h1>Задание {task.number}</h1>
      <p className="mt-4 whitespace-pre-line">{task.text}</p>
    </div>
  );
}
