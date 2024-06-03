document.addEventListener('DOMContentLoaded', function() {
    var birthDateInput = document.getElementById('birth-date');

    flatpickr(birthDateInput, {
        dateFormat: "d.m.Y",
        locale: "ru",
        maxDate: "today",
        altInput: true,
        altFormat: "j F Y",
        animate: true,
        disableMobile: "true",
    });

    document.getElementById('registration-form').addEventListener('submit', function(event) {
        event.preventDefault();

        var firstName = document.getElementById('first-name').value;
        var lastName = document.getElementById('last-name').value;
        var middleName = document.getElementById('middle-name').value;
        var birthDate = birthDateInput.value;

        // Сохраняем информацию о пользователе в localStorage
        localStorage.setItem('firstName', firstName);
        localStorage.setItem('lastName', lastName);
        localStorage.setItem('middleName', middleName);
        localStorage.setItem('birthDate', birthDate);

        // Отображаем сообщение об успешной регистрации с помощью SweetAlert2
        Swal.fire({
            title: 'Регистрация прошла успешно!',
            text: 'Пройдите тест:',
            icon: 'success',
            confirmButtonText: 'Пройти тест',
            confirmButtonColor: '#66bb6a',
            showDenyButton: true,
            denyButtonText: 'Отмена',
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = 'main.html';
            }
        });
    });
});
