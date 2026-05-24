const openFormBtn = document.getElementById("openFormBtn");
const closeBtn = document.getElementById("closeBtn");

const popup = document.getElementById("popup");

const taskForm = document.getElementById("taskForm");

const taskList = document.getElementById("taskList");

const message = document.getElementById("message");

const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");
const pendingTasks = document.getElementById("pendingTasks");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [

    {
        title: "Học JavaScript DOM",
        description: "Ôn lại thao tác DOM và Event",
        deadline: "2026-05-25",
        priority: "Cao",
        completed: false
    },

    {
        title: "Làm bài tập Web",
        description: "Hoàn thành bài CRUD quản lý công việc",
        deadline: "2026-05-26",
        priority: "Trung Bình",
        completed: true
    },

    {
        title: "Học CSS Grid",
        description: "Xem lại cách chia layout bằng Grid",
        deadline: "2026-05-27",
        priority: "Thấp",
        completed: false
    },

    {
        title: "Thiết kế giao diện",
        description: "Làm đẹp giao diện ứng dụng",
        deadline: "2026-05-28",
        priority: "Cao",
        completed: true
    },

    {
        title: "Lưu dữ liệu localStorage",
        description: "Kiểm tra chức năng lưu dữ liệu",
        deadline: "2026-05-29",
        priority: "Trung Bình",
        completed: false
    }

];
let editIndex = -1;

renderTasks();
updateSummary();


// Mở popup
openFormBtn.addEventListener("click", () => {

    popup.style.display = "flex";

});


// Đóng popup
closeBtn.addEventListener("click", () => {

    popup.style.display = "none";

    taskForm.reset();

});


// Submit form
taskForm.addEventListener("submit", function(e){

    e.preventDefault();

    const title = document.getElementById("title").value;

    const description =
        document.getElementById("description").value;

    const deadline =
        document.getElementById("deadline").value;

    const priority =
        document.getElementById("priority").value;

    const task = {

        title,
        description,
        deadline,
        priority,
        completed:false

    };

    // Thêm mới
    if(editIndex === -1){

        tasks.push(task);

        showMessage("Thêm công việc thành công");

    }

    // Cập nhật
    else{

        task.completed = tasks[editIndex].completed;

        tasks[editIndex] = task;

        showMessage("Cập nhật công việc thành công");

        editIndex = -1;
    }

    saveTasks();

    renderTasks();

    updateSummary();

    popup.style.display = "none";

    taskForm.reset();

});


// Hiển thị danh sách
function renderTasks(){

    taskList.innerHTML = "";

    if(tasks.length === 0){

        taskList.innerHTML = `
            <p>Chưa có công việc nào</p>
        `;

        return;
    }

    tasks.forEach((task,index)=>{

        let priorityClass = "";

        if(task.priority === "Thấp"){
            priorityClass = "low";
        }

        else if(task.priority === "Trung Bình"){
            priorityClass = "medium";
        }

        else{
            priorityClass = "high";
        }

        taskList.innerHTML += `

            <div class="task ${task.completed ? "completed" : ""}">

                <h3>${task.title}</h3>

                <p>${task.description}</p>

                <p>
                    <b>Hạn:</b>
                    ${task.deadline}
                </p>

                <span class="priority ${priorityClass}">
                    ${task.priority}
                </span>

                <p>
                    Trạng thái:
                    ${
                        task.completed
                        ?
                        "Đã hoàn thành"
                        :
                        "Chưa hoàn thành"
                    }
                </p>

                <div class="actions">

                    <button 
                        class="complete-btn"
                        onclick="toggleComplete(${index})"
                    >
                        ${
                            task.completed
                            ?
                            "Hoàn tác"
                            :
                            "Hoàn thành"
                        }
                    </button>

                    <button 
                        class="edit-btn"
                        onclick="editTask(${index})"
                    >
                        Sửa
                    </button>

                    <button 
                        class="delete-btn"
                        onclick="deleteTask(${index})"
                    >
                        Xóa
                    </button>

                </div>

            </div>

        `;
    });

}


// Lưu localStorage
function saveTasks(){

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );

}


// Xóa
function deleteTask(index){

    const confirmDelete =
        confirm("Bạn có chắc muốn xóa?");

    if(confirmDelete){

        tasks.splice(index,1);

        saveTasks();

        renderTasks();

        updateSummary();

        showMessage("Đã xóa công việc");
    }

}


// Sửa
function editTask(index){

    popup.style.display = "flex";

    document.getElementById("title").value =
        tasks[index].title;

    document.getElementById("description").value =
        tasks[index].description;

    document.getElementById("deadline").value =
        tasks[index].deadline;

    document.getElementById("priority").value =
        tasks[index].priority;

    editIndex = index;
}


// Đổi trạng thái
function toggleComplete(index){

    tasks[index].completed =
        !tasks[index].completed;

    saveTasks();

    renderTasks();

    updateSummary();

    showMessage("Đã cập nhật trạng thái");
}


// Thông báo
function showMessage(text){

    message.innerText = text;

    setTimeout(()=>{

        message.innerText = "";

    },2000);

}


// Thống kê
function updateSummary(){

    totalTasks.innerText = tasks.length;

    const completed =
        tasks.filter(task => task.completed).length;

    completedTasks.innerText = completed;

    pendingTasks.innerText =
        tasks.length - completed;

}