import React, { createContext, useContext, useState } from 'react';
const CalculatorContext = createContext();

export const CalculatorProvider = ({ children }) => {

    const [numbers, setNumbers]= useState([]);
    const [currentNumber, setCurrentNumber]= useState('') 

    const addNumbers = (number) => {
        setCurrentNumber(currentNumber + number)

    }

    const calculateSum = () => {
        const sum = numbers.reduce((acumulator, num) => acumulator + parseFloat(num), 0) + parseFloat(currentNumber || 0);
        setNumbers([...numbers, currentNumber]);
        setCurrentNumber(sum.toString());
    };
    

    const resetCalculator = () => {
      setNumbers([]);
      setCurrentNumber('');
  }


  return (
    <CalculatorContext.Provider value={{numbers, currentNumber, addNumbers, calculateSum, resetCalculator}}>
        {children}
    </CalculatorContext.Provider>
  )
}

export const useCalculator = () => useContext(CalculatorContext)




