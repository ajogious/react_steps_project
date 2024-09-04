import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const handlePrevious = () => step > 1 && setStep((prev) => prev - 1);

  const handleNext = () =>
    step < messages.length && setStep((prev) => prev + 1);

  const handleClose = () => {
    setIsOpen((is) => !is);
    if (isOpen) {
      setStep(1);
    }
  };

  return (
    <>
      {isOpen ? (
        <h2 className="header">Click the close icon to hide</h2>
      ) : (
        <h2 className="header">Click the close icon to view</h2>
      )}
      <button className="close" onClick={handleClose}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""} `}>1</div>
            <div className={`${step >= 2 ? "active" : ""} `}>2</div>
            <div className={`${step >= 3 ? "active" : ""} `}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
