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
      <div className="my-8">
        <div className="flex justify-center">
        <h1 className="text-bold text-4xl pb-5">Leaderboards</h1>
        </div>
        

        <div className="shadow-md my-4 mih-h-[50vh] px-4 py-4">
          <div className="flex my-8 pl-20">
            <div className="w-1/3">Id</div>
            <div className="w-1/3">Name</div>
            <div className="w-1/3">Points</div>
          </div>
          {leaderboard.map((item) => (
            <div className="flex my-4 text-lg bg-white shadow-sm py-4 px-2 pl-20">
              <div className="w-1/3">{item.id}</div>
              <div className="w-1/3">{item.name}</div>
              <div className="w-1/3">{item.points}</div>
            </div>
          ))}
          <div className="flex"></div>
        </div>
      </div>
      </div>
    );
  };