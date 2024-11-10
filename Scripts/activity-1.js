function multiTable(){
    const num = 2;
    let result = 0;
    for(let i=0; i<=11; i++){
        let result = num * i;
        document.write(`<p> ${num} x ${i} = ${result} </p>`);
    }
}

//multiTable();

/*for(let i=0; i<4; i++){
    document.write("My for is working? ");
}

for(let var1=0; var1<=11; var1++){

}*/

//arrays

let student = ["Jose", "Michael", "Samson", "Kit", "Angel", "Jonathan"];
let ages = [22,35,20,43,37,33];

for(let i = 0; i<6; i++){
    document.getElementById("studentList").innerHTML+=`
    <tr>
        <td> ${i+1} </td>
        <td> ${student[i]} </td>
        <td> ${ages[i]} </td>
        <td></td>
    </tr>`; 
}