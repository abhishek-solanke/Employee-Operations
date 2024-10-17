document.querySelector(".myform").addEventListener("submit", function (event) {
  event.preventDefault();

  const empData = {
    empno: document.getElementById("empno").value,
    ename: document.getElementById("empname").value,
    job: document.getElementById("job").value,
    sal: document.getElementById("sal").value,
    deptno: document.getElementById("deptno").value,
  };

  // Send data to the server
  fetch("http://localhost:4310/saveData", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(empData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
    //   return response.json(); // Parse JSON response
    })
    .then((data) => {
      console.log("Success:", data);
      window.location.href = "successPage.html";  
    })
    .catch((error) => {
        console.error("Error:", error);
    //   console.log("ERROR");
    });
});
