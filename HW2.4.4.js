const calculateBonus = (a, b) => {
    let bonus;
    const sum = a + b;
    debugger; /* выполняется операция сложения переменных a и b, 
    результат сложения присваивается переменной sum */
    sum > 50 ? (bonus = 50) : (bonus = sum);
    debugger; /* выполняется условный (тернарный) оператор, 
    принимающий три операнда: 
    условие, за которым следует знак вопроса (?), 
    затем выражение, которое выполняется, если условие истинно, сопровождается двоеточием (:), 
    и, наконец, выражение, которое выполняется, если условие ложно. 
    Соответственно, если сумма > 50, то переменной bonus присваивается значение 50,
    а если сумма < 50, то переменной bonus присваивается значение sum  */
    return bonus;
  };
  
  console.log(calculateBonus(100, 200));

  module.exports = calculateBonus