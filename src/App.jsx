/* eslint-disable no-unused-vars */
import { getData } from './constants/db';
import "./App.css";

const courses = getData()

const App = () => {
  return (
    <>
      <h1>Course</h1>
      {/* Card */}
      <div className="cards__container">
        {courses.map((course)=> (
          <>
            <h1>{course.title}</h1>
          </>
        ))}
      </div>
    </>
  );
};

export default App;
