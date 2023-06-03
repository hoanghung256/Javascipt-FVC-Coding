var staffsAPI = "http://localhost:8080/staffs";

function staffsList() {
  fetch(staffsAPI)
    .then(function (response) {
      return response.json();
    }).then(function (staffs) {
      // html code created from staffs list
      let staffsDiv = $("#staffs");

      staffs.forEach((staff) => {
        console.log(staff);
        let staffDivs = $("<div></div>").attr("id", "staff" + staff.id).attr("class", "staff-div");
        let btnDiv = $("<div></div>");
        let staffImage = $("<img>").attr("src", staff.image);
        let staffName = $("<p></p>").attr("id", "staffName" + staff.id).html(staff.name);
        let staffId = $("<p></p>").html("ID: " + staff.id);

        let detailBtn = $("<button>Detail</button>").attr("class", "detail-button");
        let dltBtn = $("<button>Delete</button>").attr("id", staff.id).attr("class", "delete-button").attr("onClick", "deleteStaff(this.id)");

        staffDivs.append(staffImage, staffName, staffId, btnDiv);

        btnDiv.append(detailBtn);
        btnDiv.append(dltBtn);

        staffsDiv.append(staffDivs);
      })
    })
    //warning api error
    .catch((error) => {
      alert(error);
    });
}

function handleForm() {
  var addBtn = document.querySelector("#add");
  var updateBtn = document.querySelector("#update");

  addBtn.onclick = function () {
    var name = document.querySelector('input[name="name"]').value;
    var doB = document.querySelector('input[name="doB"]').value;
    var departmentId = document.querySelector('input[name="departmentId"]').value;

    var formData = {
      name: name,
      doB: doB,
      departmentId: departmentId,
      image: "https://cdn.pixabay.com/photo/2016/11/14/17/39/person-1824147_640.png"
    };
    //get data from form then put into function
    addStaff(formData);
  }

  updateBtn.onclick = function () {
    var name = document.querySelector('input[name="name"]').value;
    var doB = document.querySelector('input[name="doB"]').value;
    var departmentId = document.querySelector('input[name="departmentId"]').value;
    var updateId = document.querySelector('input[name="id"]').value;

    var formData = {
      name: name,
      doB: doB,
      departmentId: departmentId,
      image: "https://cdn.pixabay.com/photo/2016/11/14/17/39/person-1824147_640.png"
    };
     //get data from form then put into function
    updateInfor(updateId, formData);
  }
}
handleForm();

function addStaff(formData) {
  fetch(staffsAPI, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      console.log(response);
    });
}

function updateInfor(updateId, formData) {
  fetch(staffsAPI + "/" + updateId, {
    method: "PATCH",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData),

  }).then((response) => {
    console.log(response);
  });
}

function deleteStaff(clicked_id) {
  console.log(clicked_id);
  //delete staff by id
  fetch(staffsAPI + "/" + clicked_id, {
    method: "DELETE",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },

  })
    .then((response) => {
      console.log(response);
    });
}

function showDepartments() {
  let deptList = $("#deptList");
  deptList.attr("style", "display: block");
}





