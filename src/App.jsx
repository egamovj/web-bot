/* eslint-disable no-unused-vars */
import { getData } from './constants/db';
import Card from './components/card/card';
import "./App.css";
import Cart from './components/cart/cart';

const courses = getData()

const App = () => {
  return (
    <>
      <h1 className='heading'>Course</h1>
      <Cart />
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
