import { useEffect, useState } from "react";
import "./style.css";

export default function App() {
  const [list, setList] = useState([1, 2]);
  useEffect(() => {
    if (list.length < 100) {
      var data = setInterval(() => {
        setList((prev) => {
          return [...prev, list.length + 1];
        });
      }, 1000);
      return () => clearInterval(data);
    }
    console.log(list.length);
  }, [list]);
  return (
    <>
      <div className="heading">
        <ul>
          {list.map((elem, index) => {
            return (
              <li key={index}>
                <div
                  style={{
                    color:
                      list.length === 100 && elem % 2 === 0
                        ? "blue"
                        : list.length === 100 && elem % 3 === 0
                        ? "green"
                        : list.length === 100 && elem % 5 === 0
                        ? "orange"
                        : ""
                  }}
                >
                  {elem}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
