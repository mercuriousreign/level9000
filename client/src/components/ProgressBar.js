import React from "react";


export default function ProgressBar(props) {
  const { bgcolor, completed } = props;

  const containerStyles = {
    height: 20,
    width: '25%',
    backgroundColor: '#e0e0de',
    borderRadius: 50,
    margin: 50
  };

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right',
    transition: 'width 1s ease-in-out',
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}></div>
      {completed === 100 && <strong style={{ fontSize: '30px' }}>Great Success!</strong>}
    </div>
  );
}