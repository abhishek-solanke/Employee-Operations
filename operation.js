// // alert("working");


document.querySelector(".btn-primary").addEventListener("click",function(e){
    console.log(e.target);
    window.location.href="register.html"
})

let empnoArr = [];

empnoArr.forEach(na => console.log(`Array ${na}`))


fetch("http://localhost:4310/showAllData")
        .then(response => {
            if(!response.ok){
                throw new Error("Network response was not OK");
            }
            return response.json()
        })
        .then(data =>{
            console.log(data);
            let arr = Array.from(data);
            arr.forEach(na => {
                console.log(na.empno);
                console.log(na.ename);
                console.log(na.job);
                console.log(na.sal);
                console.log(na.deptno);
            
                if(!empnoArr.includes(na.empno)){
                        empnoArr.push(na.empno);
                       //agar empno nahi hai , mtlb user andar save nahi hai , to save kro => row bnav
                       let tableParent = document.querySelector(".tab") ;
                       let tableRowParent = document.createElement("tr");
                       tableRowParent.className = `tr-${na.empno}`;

                       tableRowParent.innerHTML = 
                       `<td class="employeeNo">${na.empno}</td>
                        <td class="employeeName">${na.ename}</td>
                        <td class="employeeJob">${na.job}</td>
                        <td class="employeeSal">${na.sal}</td>
                        <td class="employeeDeptno">${na.deptno}</td>
                        <td class="employeeEdit"><a href="edit.html?empno=${na.empno}&ename=${na.ename}"><span class="line-md--edit"></span></a></td>
                        <td class="employeeDelete"><a href="delete.html?empno=${na.empno}&ename=${na.ename}"><span class="material-symbols--delete-outline"></span></a></td>
                        `
                        tableParent.appendChild(tableRowParent);                         
                       
                }//if ends

                });     //arr for each ends

        })  //then ends
        .catch(error => {
            console.log("problem with fetch operation"); 
        });
        


        



//========================================
//========================================
// function typeEffect(element, text, speed, callback) {
//     let i = 0;
//     let interval = setInterval(() => {
//         if (i < text.length) {
//             element.textContent += text.charAt(i); // Add character one by one
//             i++;
//         } else {
//             clearInterval(interval);
//             if (callback) callback(); // Trigger the next cell typing after the current one finishes
//         }
//     }, speed);
// }

// // Function to add table rows with the live typing effect
// function addRowWithTyping(na, tableParent) {
//     // Create row and append it to the table
//     let tableRowParent = document.createElement("tr");
//     tableRowParent.className = `tr-${na.empno}`;

//     let cellsContent = [
//         na.empno.toString(), 
//         na.ename, 
//         na.job, 
//         na.sal.toString(), 
//         na.deptno.toString(),
//         "Edit",
//         "Delete"
//         // `<span class="line-md--edit"></span>`,
//         //   `<span class="material-symbols--delete-outline"></span>`
//     ];

//     let cellElements = [];

//     // Create and append empty cells (these will be filled with typing effect)
//     cellsContent.forEach(() => {
//         let cell = document.createElement("td");
//         tableRowParent.appendChild(cell);
//         cellElements.push(cell); // Store the cell for adding text later
//     });

//     // Append the row to the table
//     tableParent.appendChild(tableRowParent);

//     // Now apply the typing effect cell by cell
//     let typingSpeed = 35; // Adjust typing speed (lower = faster)

//     typeEffect(cellElements[0], cellsContent[0], typingSpeed, () => {
//         typeEffect(cellElements[1], cellsContent[1], typingSpeed, () => {
//             typeEffect(cellElements[2], cellsContent[2], typingSpeed, () => {
//                 typeEffect(cellElements[3], cellsContent[3], typingSpeed, () => {
//                     typeEffect(cellElements[4], cellsContent[4], typingSpeed, () => {
//                         typeEffect(cellElements[5], cellsContent[5], typingSpeed, () => {
//                              typeEffect(cellElements[6], cellsContent[6], typingSpeed);

//                         });
//                     });
//                 });
//             });
//         });
//     });
// }

// // Fetch data and progressively add rows with the typing effect
// fetch("http://localhost:4310/showAllData")
//     .then(response => {
//         if (!response.ok) {
//             throw new Error("Network response was not OK");
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//         let arr = Array.from(data);
//         let tableParent = document.querySelector(".tab"); // Ensure the table has the .tab class

//         arr.forEach((na, index) => {
//             setTimeout(() => {
//                 addRowWithTyping(na, tableParent); // Add each row with typing effect
//             }, index * 500); // Delay each row addition by 0.5 second
//         });
//     })
//     .catch(error => {
//         console.log("Problem with fetch operation", error);
//     });
