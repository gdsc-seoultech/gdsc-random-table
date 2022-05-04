import React, { useState } from "react";

import { gdscMemberList } from "./member";
import img from "./assets/img.jpg";

const App = () => {
  const [step, setStep] = useState(0);

  const [tableMember, setTableMember] = useState([
    ["ㅁ", "ㅠ"],
    ["ㅁ", "ㅋ"],
  ]);

  const shuffleMember = () => {
    let memberList = gdscMemberList;
    const memberNum = gdscMemberList.length;

    const wholeTable = [];
    let groupTable = [];
    for (let i = 0; i < memberNum; i++) {
      const memberIndex = Math.floor(Math.random() * memberList.length);
      const memberName = memberList[memberIndex].name;

      memberList = memberList.filter((el) => {
        return el.name !== memberName;
      });

      groupTable.push(memberName);

      if (groupTable.length === 4 || i === memberNum - 1) {
        wholeTable.push(groupTable);
        groupTable = [];
      }
    }

    setTableMember(wholeTable);
    setStep(2);
  };

  const changeStep = (step) => {
    setStep(step);
  };

  return (
    <div className="wrapper">
      {step === 0 && (
        <div className="img-wrapper">
          <img src={img} alt="." className="board-img" />
          <button className="next-step-button" onClick={() => changeStep(1)}>
            가즈앗!! 오늘 먹고 죽어
          </button>
        </div>
      )}

      {step === 1 && (
        <div className="wrapper">
          <p className="step-2-p">오늘 즐길 준비 돼썽요????</p>
          <button className="shuffle-button" onClick={() => shuffleMember()}>
            <span>섞어</span>
          </button>
        </div>
      )}

      {step === 2 && (
        <div>
          <table>
            <thead>
              <tr>
                <th>조</th>
                <th>조원1</th>
                <th>조원2</th>
                <th>조원3</th>
                <th>조원4</th>
              </tr>
            </thead>
            <tbody>
              {tableMember.map((item, index) => (
                <tr>
                  <td>{index + 1}조</td>
                  {item.map((el) => (
                    <td>{el}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <button className="shuffle-button" onClick={() => shuffleMember()}>
            <span>다시섞어</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
