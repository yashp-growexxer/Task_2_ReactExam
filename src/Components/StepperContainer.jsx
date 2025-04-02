import Step from "./Step";

const StepperContainer = ({ value, onChange, children }) => {
  return (
    <div>
      {children.map((child, index) => {
        const isCompleted = index < value;
        return (
          <div key={index}>
            <Step
              title={child.props.title}
              message={child.props.message}
              onClick={() => onChange(index)}
            />
            {index < children.length - 1 && (
              <div className={`line ${isCompleted ? "completed-line" : ""}`} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StepperContainer;
