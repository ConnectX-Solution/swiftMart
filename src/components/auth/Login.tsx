import React, { useState } from "react";
import { InputText } from "primereact/inputtext";

const Login = () => {
  const [value, setValue] = useState<any>();
  return (
    <div>
      <h1>Login page</h1>

      <div className="card flex justify-content-center">
        <InputText value={value} onChange={(e) => setValue(e.target.value)} />
      </div>
    </div>
  );
};

export default Login;
