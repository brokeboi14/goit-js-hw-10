let formData = {
    email: "",
    message: ""
};
function filledForm() {
    const savedData = localStorage.getItem('feedback-form-state');
    if (savedData) {
        formData = JSON.parse(savedData);
        document.querySelector('.feedback-form input[name="email"]').value = formData.email || "";
        document.querySelector('.feedback-form textarea[name="message"]').value = formData.message || "";
    }
}
function saveFormData() {
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
document.querySelector('.feedback-form').addEventListener('input', (event) => {
    formData[event.target.name] = event.target.value.trim();
    saveFormData();
});
document.querySelector('.feedback-form').addEventListener('submit', (event) => {
    event.preventDefault();
    if (!formData.email || !formData.message) {
        alert('Fill please all fields');
        return;
    }
    console.log(formData);
    formData = { email: "", message: "" };
    localStorage.removeItem('feedback-form-state');
    event.target.reset();
});
document.addEventListener('DOMContentLoaded', filledForm);