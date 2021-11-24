const LongText = ({ text }) => {
  const textColor = text.length > 5 ? "red" : "green";
  return (
    <div>
      <h2 style={{ color: textColor }}>{text}</h2>
    </div>
  );
};

export default LongText;
