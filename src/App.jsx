/* eslint-disable no-unused-vars */
import { getData } from './constants/db';
import "./App.css";
import Card from './components/card/card';

const courses = getData()

const App = () => {
  return (
    <>
      <h1>Course</h1>
      {/* Card */}
      <div className="cards__container">
        {courses.map((course)=> (
          <>
            <Card key={course.id}  course={course}/>
          </>
        ))}
      </div>
    </>
  );
};

export default App;
