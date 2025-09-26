import StudentRow from "./StudentRow";

const StudentList = ({ students }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg border border-gray-200 p-6 mt-6">
      <h2 className="text-xl font-bold mb-4 text-gray-900">
        Danh sách sinh viên
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-100 border-b border-gray-200">
              <th className="p-3 text-center font-semibold text-gray-900">
                Mã SV
              </th>
              <th className="p-3 text-left font-semibold text-gray-900">
                Họ và tên
              </th>
              <th className="p-3 text-center font-semibold text-gray-900">
                Giới tính
              </th>
              <th className="p-3 text-center font-semibold text-gray-900">
                Tuổi
              </th>
              <th className="p-3 text-left font-semibold text-gray-900">
                Chuyên ngành
              </th>
              <th className="p-3 text-center font-semibold text-gray-900">
                Điểm TB
              </th>
              <th className="p-3 text-left font-semibold text-gray-900">
                Danh hiệu
              </th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <StudentRow key={student.id} student={student} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default StudentList;
