import React, { useState } from "react";

import { gdscMemberList } from "./member";
import img from "./assets/img.jpg";
import CountDown from "./components/CountDown";

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
    <div>
      {step === 0 && (
        <div className="img-wrapper">
          <img src={img} alt="." className="board-img" />
          <button className="next-step-button" onClick={() => changeStep(1)}>
            가즈앗!! 오늘 먹고 죽어
          </button>
        </div>
      )}

      {step === 1 && (
        <div className="second-wrapper">
          <p className="step-2-p">
            <span>오</span>
            <span>늘</span>
            <span> </span>
            <span>즐</span>
            <span>길</span>
            <span> </span>
            <span>준</span>
            <span>비</span>
            <span> </span>
            <span>됐</span>
            <span>나</span>
            <span>요</span>
            <span>?</span>
            <span>?</span>
          </p>
          <button className="shuffle-button" onClick={() => shuffleMember()}>
            <span>섞어!!</span>
          </button>
        </div>
      )}

      {step === 2 && <CountDown animationCallback={() => changeStep(3)} />}
      {step === 3 && (
        <div>
          <table>
            {tableMember.map((item, index) => (
              <tbody>
                <tr className="table-group">
                  <td>{index + 1}조</td>
                </tr>
                <tr className="member-group">
                  {item.map((el, index) => index <= 1 && <td>{el}</td>)}
                </tr>
                <tr className="member-group">
                  {item.map((el, index) => index > 1 && <td>{el}</td>)}
                </tr>
              </tbody>
            ))}
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
