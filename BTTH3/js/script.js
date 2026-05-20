
let students =
    JSON.parse(localStorage.getItem("students")) || [];

let editIndex = -1;


const studentTableBody =
    document.getElementById("studentTableBody");

const studentForm =
    document.getElementById("studentForm");

const studentModal =
    document.getElementById("studentModal");

const openModalBtn =
    document.getElementById("openModalBtn");

const closeModalBtn =
    document.getElementById("closeModalBtn");

const cancelBtn =
    document.getElementById("cancelBtn");   

const modalTitle =
    document.getElementById("modalTitle");

const message =
    document.getElementById("message");


function renderStudents(){

    studentTableBody.innerHTML = "";

    if(students.length === 0){

        studentTableBody.innerHTML = `
            <tr>
                <td colspan="7">
                    Chưa có sinh viên nào
                </td>
            </tr>
        `;

        updateStatistics();

        return;
    }

    students.forEach((student, index) => {

        studentTableBody.innerHTML += `
            <tr>

                <td>${student.id}</td>

                <td>${student.name}</td>

                <td>${student.birthday}</td>

                <td>${student.className}</td>

                <td>${student.score}</td>

                <td>${student.email}</td>

                <td>

                    <button
                        class="edit-btn"
                        onclick="editStudent(${index})"
                    >
                        Sửa
                    </button>

                    <button
                        class="delete-btn"
                        onclick="deleteStudent(${index})"
                    >
                        Xóa
                    </button>

                </td>

            </tr>
        `;
    });

    updateStatistics();
}


function saveStudents(){

    localStorage.setItem(
        "students",
        JSON.stringify(students)
    );

}


function resetForm(){

    studentForm.reset();

    editIndex = -1;

    modalTitle.innerText = "Thêm sinh viên";

}



openModalBtn.addEventListener("click", function(){

    studentModal.classList.remove("hidden");

});



closeModalBtn.addEventListener("click", closeModal);

cancelBtn.addEventListener("click", closeModal);

function closeModal(){

    studentModal.classList.add("hidden");

    resetForm();

}



studentForm.addEventListener("submit", function(e){

    e.preventDefault();

    const student = {

        id:
            document.getElementById("studentId").value,

        name:
            document.getElementById("studentName").value,

        birthday:
            document.getElementById("studentBirthday").value,

        className:
            document.getElementById("studentClass").value,

        score:
            document.getElementById("studentScore").value,

        email:
            document.getElementById("studentEmail").value

    };



    if(editIndex === -1){

        students.push(student);

        showMessage("Thêm sinh viên thành công!");

    }


    else{

        students[editIndex] = student;

        showMessage("Cập nhật sinh viên thành công!");

    }


    saveStudents();

    renderStudents();

    closeModal();

});



function deleteStudent(index){

    const confirmDelete = confirm(
        "Bạn có chắc muốn xóa sinh viên này?"
    );

    if(confirmDelete){

        students.splice(index, 1);

        saveStudents();

        renderStudents();

        showMessage("Xóa sinh viên thành công!");

    }

}



function editStudent(index){

    editIndex = index;

    const student = students[index];

    document.getElementById("studentId").value =
        student.id;

    document.getElementById("studentName").value =
        student.name;

    document.getElementById("studentBirthday").value =
        student.birthday;

    document.getElementById("studentClass").value =
        student.className;

    document.getElementById("studentScore").value =
        student.score;

    document.getElementById("studentEmail").value =
        student.email;

    modalTitle.innerText = "Cập nhật sinh viên";

    studentModal.classList.remove("hidden");

}


function updateStatistics(){

    document.getElementById("totalStudents")
        .innerText = students.length;

    let total = 0;

    students.forEach(student => {

        total += Number(student.score);

    });

    const average =
        students.length === 0
        ? 0
        : (total / students.length).toFixed(2);

    document.getElementById("averageScore")
        .innerText = average;

}



function showMessage(text){

    message.innerText = text;

}



renderStudents();