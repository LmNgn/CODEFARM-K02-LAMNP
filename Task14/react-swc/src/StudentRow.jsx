import { getTitle } from "./utils";

const StudentRow = ({ student }) => {
  const title = getTitle(student.score);
  console.log(student);
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-100 transition-colors">
      <td className="p-3 text-center font-medium text-gray-900">
        {student.id}
      </td>
      <td className="p-3 text-gray-900">{student.fullName}</td>
      <td className="p-3 text-center text-gray-700">{student.gender}</td>
      <td className="p-3 text-center text-gray-700">{student.age}</td>
      <td className="p-3 text-gray-700">{student.major}</td>
      <td className="p-3 text-center font-semibold text-gray-900">
        {student.score}
      </td>
      <td className={`p-3 font-semibold ${title.color}`}>{title.label}</td>
    </tr>
  );
};

export default StudentRow;
