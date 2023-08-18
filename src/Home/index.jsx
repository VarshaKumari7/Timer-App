import { useEffect, useState } from "react";
import "./home.css";
import Modal from "react-bootstrap/Modal";

export default function TimerApp() {
  const [isRunning, setIsRunning] = useState(false);
  const [timerValue, setTimerValue] = useState(0);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    let timerVal;
    if (isRunning) {
      timerVal = setInterval(() => {
        setTimerValue((pretimeval) => pretimeval + 1);
      }, 1000);
    } else {
      clearInterval(timerVal);
    }
    return () => {
      clearInterval(timerVal);
    };
  }, [isRunning]);

  const handleToggleButton = () => {
    setIsRunning(!isRunning);
  };
  return (
    <div className="container">
      <button className=" open-model-button" onClick={handleShow}>
        Open modal
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>React Background Count-down Timer</Modal.Title>
          <button onClick={handleClose} style={{ padding: "2px 5px" }}>
            <span style={{ paddingRight: "3px" }}>x</span>
            <span>Close</span>
          </button>
        </Modal.Header>
        <Modal.Body>
          <div className=" h1 timer-value">
            <span>{timerValue}</span>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="start" onClick={handleToggleButton}>
            {isRunning ? "Stop" : "Start"}
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
