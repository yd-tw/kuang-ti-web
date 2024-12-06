const contestData = [
  {
    name: "111學年 新北市學科能力競賽",
    rank: "新北複賽",
    about: "",
    official: "",
  },
  {
    name: "2024 台灣國際資訊奧林匹亞競賽",
    rank: "全國207名",
    about: "",
    official: "",
  },
  {
    name: "2020 TIRT全能機器人國際邀請賽",
    rank: "第三名",
    about: "",
    official: "",
  },
  {
    name: "111學年 中和高中資訊學科能力競賽",
    rank: "第四名",
    about: "",
    official: "",
  },
  {
    name: "112學年 中和高中資訊學科能力競賽",
    rank: "第五名",
    about: "",
    official: "",
  },
  {
    name: "112學年 中和高中校內科展",
    rank: "電腦科學佳作",
    about: "",
    official: "",
  },
  {
    name: "112學年 中和高中校內科展",
    rank: "工程學科一佳作",
    about: "",
    official: "",
  },
  {
    name: "智慧科技素養與程式設計創新應用競賽",
    rank: "第三名",
    about: "",
    official: "",
  },
  {
    name: "2023 新北市FRC機器人新生盃",
    rank: "聯盟佳作",
    about: "",
    official: "",
  },
  {
    name: "師大第五屆AI智慧小車模擬競賽",
    rank: "聯盟第一",
    about: "",
    official: "",
  },
  {
    name: "第十屆成大程式邀請賽初賽",
    rank: "全國41名",
    about: "",
    official: "",
  },
];

export default function Competition() {
  return (
    <section id="contest">
      <h2 className="my-4 text-center text-4xl font-bold text-white">
        競賽獲獎
      </h2>
      <div className="bg-[#221f1f] px-4 pb-4">
        {contestData.map((data, index) => (
          <li className="list-none border-b" key={index}>
            <div className="items-center rounded-lg bg-[#221f1f] p-4 hover:bg-[#1f2937] lg:flex">
              <div className="flex">
                <p className="mr-8 text-white md:text-2xl">{data.name}</p>
              </div>
              <div className="flex flex-grow">
                <p className="mr-8 text-white md:text-2xl">{data.rank}</p>
                <div className="ml-auto hidden font-bold text-white sm:block">
                  <button className="mr-4 rounded bg-orange-900 px-4 py-1 hover:bg-orange-600">
                    比賽經歷
                  </button>
                  <button className="mr-4 rounded bg-orange-900 px-4 py-1 hover:bg-orange-600">
                    官方連結
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </div>
    </section>
  );
}
