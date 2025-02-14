import contest from "../../config/contest.json";

export default function Contest() {
  return (
    <section className="bg-orange-100 p-4 my-8 rounded-xl" id="contest">
      <h2 className="my-4 text-center text-4xl font-bold">競賽獲獎</h2>
      {contest.map((data, index) => (
        <li className="list-none border-b" key={index}>
          <div className="items-center rounded-lg p-4 hover:bg-orange-300 lg:flex">
            <p className="mr-8 md:text-2xl">{data.name}</p>
            <div className="flex grow">
              <p className="mr-8 md:text-2xl">{data.rank}</p>
              <div className="ml-auto hidden font-bold text-white sm:block">
                <button className="mr-4 rounded-sm bg-orange-900 px-4 py-1 hover:bg-orange-600">
                  比賽經歷
                </button>
                <button className="mr-4 rounded-sm bg-orange-900 px-4 py-1 hover:bg-orange-600">
                  官方連結
                </button>
              </div>
            </div>
          </div>
        </li>
      ))}
    </section>
  );
}
