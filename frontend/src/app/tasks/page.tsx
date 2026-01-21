export default async function TasksPage() {
  const res = await fetch("http://backend:3001/tasks");
  const tasks = await res.json();

  return (
    <table className="w-full bg-white border">
      <tbody>
        {tasks.map(t => (
          <tr key={t.id}>
            <td className="border p-1">{t.number}</td>
            <td className="border p-1">
              <a href={`/tasks/${t.id}`} className="text-link underline">
                открыть
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
