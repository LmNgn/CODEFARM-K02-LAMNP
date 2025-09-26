import { getTitle } from "./utils";

const OutStandingStudent = ({ students }) => {
  const topStudent = [...students].sort((a, b) => b.score - a.score)[0];
  const title = getTitle(topStudent.score);

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg border border-gray-800">
      <h2 className="text-2xl font-bold mb-4 text-white">
        Sinh viên tiêu biểu
      </h2>
      <div className="space-y-2">
        <p className="text-gray-100">
          <span className="font-semibold text-white">Họ tên:</span>{" "}
          {topStudent.fullName}
        </p>
        <p className="text-gray-100">
          <span className="font-semibold text-white">Chuyên ngành:</span>{" "}
          {topStudent.major}
        </p>
        <p className="text-gray-100">
          <span className="font-semibold text-white">Điểm TB:</span>{" "}
          {topStudent.score}
        </p>
        <p className="text-gray-100">
          <span className="font-semibold text-white">Danh hiệu:</span>
          <span className={`ml-2 font-bold ${title.color}`}>{title.label}</span>
        </p>
      </div>
    </div>
  );
};
export default OutStandingStudent;
