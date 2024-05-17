import { Topbar } from "./Topbar";
import { TagContainer } from "./tags";

interface ProblemType {
  id: string;
  problemName: string;
  tags: string[];
}
export const ProblemList = ({
  problemList,
}: {
  problemList: ProblemType[];
}) => {

  return (<div className="">
    <div className="bg-gray-800 pb-8">
    <Topbar/>
    </div>
    <div className="my-8 flex justify-center">
      <div className="text-bold text-4xl my-8 text-bold">All Problems</div>
      </div>
      <div className="shadow-md  px-4 py-4">
        <div className="flex justify-between mb-8 font-semibold text-lg">
          <div className="flex gap-8">
            <div className="w-1/3 ml-24">Id</div>
            <div className="w-1/3 ml-16">Problem Name</div>
          </div>
          <div className="w-1/3 pl-20">Recently Solved</div>
        </div>

        {/* Rows */}
        {problemList.map((item) => (
          // ROW
          <div
            key={item.id}
            className="flex justify-between items-center mb-4 p-4 shadow-sm rounded-md"
          >
            <div className="flex gap-16 w-1/3 ml-20">
              <div>{item.id}</div>
              <div>
                <div className="text-xl mb-2 ml-20">{item.problemName}</div>
                <TagContainer tags={item.tags} />
              </div>
            </div>
            <div className="w-1/3 text-lg ">
              <span className="text-gray-500 ml-20">Last submission: </span>{" "}
              {"Krish"}
            </div>
          </div>
        ))}
      </div>
    </div>
    
  );
};