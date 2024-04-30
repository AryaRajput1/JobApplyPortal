import { useState } from "react";
import AppSelect from "../AppSelect/AppSelect";
import {
  EXPERIENCE,
  MIN_BASE_PAY,
  NUM_OF_EMP,
  REMOTE,
  ROLES,
  TECH_STACK,
} from "../../constants";

function Filter() {
  const [allFilters, setAllFilters] = useState({});
  const onChange = (key, value) => {
    setAllFilters((oldFilters) => {
      setAllFilters({ ...oldFilters, [key]: value });
    });
  };

  return (
    <div className="filters md:justify-start justify-center">
      <AppSelect
        multiple={true}
        options={ROLES}
        id="roles"
        label="Roles"
        onChange={onChange}
      />
      <AppSelect
        multiple={true}
        options={NUM_OF_EMP}
        id="employees"
        label="Number of Employees"
        onChange={onChange}
      />
      <AppSelect
        multiple={true}
        options={EXPERIENCE}
        id="experience"
        label="Experience"
        onChange={onChange}
      />
      <AppSelect
        multiple={true}
        options={REMOTE}
        id="remote"
        label="Remote"
        onChange={onChange}
      />
      <AppSelect
        multiple={true}
        options={TECH_STACK}
        id="techStack"
        label="Tech Stack"
        onChange={onChange}
      />
      <AppSelect
        multiple={true}
        options={MIN_BASE_PAY}
        id="minBasePay"
        label="Minimum Base Pay Salary"
        onChange={onChange}
      />
    </div>
  );
}

export default Filter;
