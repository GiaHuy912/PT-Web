const nameInput =
document.querySelector("#name");

const emailInput =
document.querySelector("#email");

const passwordInput =
document.querySelector("#password");

const confirmInput =
document.querySelector("#confirmPassword");

const phoneInput =
document.querySelector("#phone");

const submitBtn =
document.querySelector("#submitBtn");

let validName = false;
let validEmail = false;
let validPassword = false;
let validConfirm = false;
let validPhone = false;

function checkForm(){

    submitBtn.disabled = !(
        validName &&
        validEmail &&
        validPassword &&
        validConfirm &&
        validPhone
    );

}

nameInput.addEventListener(
    "input",
    () => {

        const value =
        nameInput.value.trim();

        const msg =
        document.querySelector("#nameError");

        if(
            value.length >= 2 &&
            value.length <= 50
        ){
            msg.textContent = "✅ Hợp lệ";
            msg.className = "success";
            validName = true;
        }
        else{
            msg.textContent =
            "❌ 2-50 ký tự";
            msg.className = "error";
            validName = false;
        }

        checkForm();

    }
);

emailInput.addEventListener(
    "input",
    () => {

        const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const msg =
        document.querySelector("#emailError");

        if(
            emailRegex.test(
                emailInput.value
            )
        ){
            msg.textContent =
            "Email hợp lệ";
            msg.className = "success";
            validEmail = true;
        }
        else{
            msg.textContent =
            "Email không hợp lệ";
            msg.className = "error";
            validEmail = false;
        }

        checkForm();

    }
);

passwordInput.addEventListener(
    "input",
    () => {

        const pass =
        passwordInput.value;

        const bar =
        document.querySelector(
            "#strengthBar"
        );

        const msg =
        document.querySelector(
            "#passwordError"
        );

        if(pass.length < 8){

            bar.style.width = "33%";
            bar.style.background = "red";

            msg.textContent = "Yếu";

            validPassword = false;
        }

        else if(
            /[a-zA-Z]/.test(pass) &&
            /\d/.test(pass)
        ){

            bar.style.width = "66%";
            bar.style.background = "orange";

            msg.textContent =
            "Trung bình";

            validPassword = true;
        }

        if(
            /[a-z]/.test(pass) &&
            /[A-Z]/.test(pass) &&
            /\d/.test(pass) &&
            /[^A-Za-z0-9]/.test(pass) &&
            pass.length >= 8
        ){

            bar.style.width = "100%";
            bar.style.background = "green";

            msg.textContent = "Mạnh";

            validPassword = true;
        }

        checkForm();

    }
);

confirmInput.addEventListener(
    "input",
    () => {

        const msg =
        document.querySelector(
            "#confirmError"
        );

        if(
            confirmInput.value ===
            passwordInput.value
        ){
            msg.textContent =
            "Khớp mật khẩu";

            msg.className =
            "success";

            validConfirm = true;
        }
        else{
            msg.textContent =
            "Không khớp";

            msg.className =
            "error";

            validConfirm = false;
        }

        checkForm();

    }
);

phoneInput.addEventListener(
    "input",
    () => {

        let value =
        phoneInput.value
        .replace(/\D/g,"");

        value =
        value.substring(0,10);

        if(value.length > 4){
            value =
            value.slice(0,4) +
            "-" +
            value.slice(4);
        }

        if(value.length > 8){
            value =
            value.slice(0,8) +
            "-" +
            value.slice(8);
        }

        phoneInput.value = value;

        const msg =
        document.querySelector(
            "#phoneError"
        );

        if(
            value.replace(/-/g,"")
            .length === 10
        ){
            msg.textContent =
            "Số điện thoại hợp lệ";

            msg.className =
            "success";

            validPhone = true;
        }
        else{
            msg.textContent =
            "Cần đủ 10 số";

            msg.className =
            "error";

            validPhone = false;
        }

        checkForm();

    }
);

document
.querySelector("#registerForm")
.addEventListener(
    "submit",
    e => {

        e.preventDefault();

        const modal =
        document.createElement("div");

        modal.className = "modal";

        modal.innerHTML = `
            <div class="modal-content">
                <h2>
                    Đăng ký thành công!
                </h2>

                <p>
                    Tên:
                    ${nameInput.value}
                </p>

                <p>
                    Email:
                    ${emailInput.value}
                </p>

                <p>
                    Phone:
                    ${phoneInput.value}
                </p>

                <button id="closeModal">
                    Đóng
                </button>
            </div>
        `;

        document.body
        .appendChild(modal);

        document
        .querySelector("#closeModal")
        .addEventListener(
            "click",
            () => modal.remove()
        );

    }
);