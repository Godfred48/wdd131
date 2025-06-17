const program = [
    {
      id: "IT101",
      name: "Web Development",
      averagerating: 4.5
    },
    {
      id: "IT102",
      name: "Data Analytics",
      averagerating: 4.7
    },
    {
      id: "IT103",
      name: "Robotics",
      averagerating: 3.5
    },
    {
      id: "IT104",
      name: "Database Systems",
      averagerating: 3.9
    },
    {
      id: "IT105",
      name: "Machine Learning",
      averagerating: 5.0
    }
];

function DisplayProgram(programArray){
    const programName = document.getElementById("program");

    programArray.forEach( program=>{
        const name=  program.name;
        const id = program.id;
        const rating = program.averagerating;
        const option= document.createElement("option");

        option.value = id;
        option.innerHTML =`<option value="${id}">${name}</option>`
        programName.appendChild(option);
    })
}
DisplayProgram(program);


  