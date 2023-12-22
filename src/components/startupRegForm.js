import React, { useState } from "react";
import PersonalDetails from "./personalDetails";
import StartupDetails from "./startupDetails";

function RegForm() {
  const [form, setForm] = useState(1);
  return (
    <>
      {form === 1 && <PersonalDetails change={setForm}></PersonalDetails>}
      {form === 2 && <StartupDetails change={setForm}></StartupDetails>}
    </>
  );
}

export default RegForm;
