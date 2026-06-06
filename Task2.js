//let and const Scope
{
    let x = 10;
    console.log("Inside block (let):", x);
}

// console.log(x); // Error

{
    const y = 20;
    console.log("Inside block (const):", y);
}

// console.log(y); // Error