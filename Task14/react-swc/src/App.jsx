import "./App.css";
import Legend from "./Legend";
import OutStandingStudent from "./OutStandingStudent";
import StudentList from "./StudentList";
import { students } from "./data";
function App() {
  return (
    <div className="max-w-4xl mx-auto p-6 ">
      <OutStandingStudent students={students} />
      <StudentList students={students} />
      <Legend />
    </div>
  );
}

export default App;
