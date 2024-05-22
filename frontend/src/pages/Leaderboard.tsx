import { Topbar } from "../components/Topbar";

export const Leaderboard = ({
    leaderboard,
  }: {
    leaderboard: { image: string; name: string; points: number; id: string }[];
  }) => {
    return (<div>
      <div className="bg-gray-800 pb-8">
    <Topbar/>
    </div>
      <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Leaderboard - Mars of the Moon</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="py-2 px-4">Id</th>
              <th className="py-2 px-4">Participant name</th>
              <th className="py-2 px-4">Points</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map(items => (
              <tr key={items.id} className="border-t">
                <td className="py-2 px-4">{items.id}</td>
                <td className="py-2 px-4">{items.name}</td>
                <td className="py-2 px-4">{items.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg">Add achievement</button>
    </div>
      </div>
    );
  };