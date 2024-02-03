import React, { useEffect } from "react";

const Welcome = (props) => {
  const { employees } = props;
  console.log(employees);
  return (
    <div>
      <h1>Welcome to the Employee Management System</h1>
      {employees && employees.length > 0 && (
        <div>
          <h1>Employee List:</h1>
          {employees.map((employee, index) => (
            <h4 key={index}>{employee}</h4>
          ))}
        </div>
      )}
    </div>
  );
};

export default Welcome;
