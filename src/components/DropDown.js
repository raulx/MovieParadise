import { useState, useEffect, useRef } from "react";
import Panel from "./Panel";
import { GoChevronLeft, GoChevronDown } from "react-icons/go";

function DropDown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref1 = useRef();
  useEffect(() => {
    const handler = (e) => {
      if (!ref1.current) {
        return;
      }
      if (!ref1.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handler);

    return () => document.removeEventListener("click", handler);
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleOptionChange = async (option) => {
    onChange(option);
    setIsOpen(false);
  };
  const optionsList = (
    <Panel>
      <ul className="dropDown-list">
        {options.map((option) => {
          return (
            <li
              key={option.id}
              onClick={() => {
                return handleOptionChange(option);
              }}
            >
              {option.name}
            </li>
          );
        })}
      </ul>
    </Panel>
  );

  return (
    <div ref={ref1} className="dropDown">
      <Panel onClick={handleClick}>
        <div className="dropDown-panel">
          {value} {isOpen ? <GoChevronDown /> : <GoChevronLeft />}
        </div>
      </Panel>
      {isOpen && optionsList}
    </div>
  );
}

export default DropDown;
