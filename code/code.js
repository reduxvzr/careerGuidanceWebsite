// Получаем все вопросы
var quiz = document.getElementById('quiz');
var questions = quiz.querySelectorAll('.question');

// Объявляем текущий вопрос
var currentQuestion = 0;

// Скрываем все вопросы, кроме первого
for (var i = 1; i < questions.length; i++) {
  questions[i].style.display = 'none';
}

// Получаем все кнопки "Далее"
var nextButtons = document.querySelectorAll('.next');

// Создаем счетчики для хранения ответов
var mechanicCount = 0;
var electricianCount = 0;
var surveyorCount = 0;
var automechanicCount= 0;
var agronomistCount = 0;
var programmerCount = 0;
var lawyerCount = 0;
var bookkeeperCount = 0;
var gasmanCount = 0;

// Создаем массивы с названиями профессий для каждого вопроса
var professionsForQuestions = {
  'mechanic': ['mechanic'],
  'electrician' : ['electrician'],
  'surveyor': ['surveyor'],
  'automechanic': ['automechanic'],
  'agronomist': ['agronomist'],
  'programmer': ['programmer'],
  'lawyer': ['lawyer'],
  'bookkeeper': ['bookkeeper'],
  'gasman': ['gasman']
};

// Добавляем обработчики событий на кнопки "Далее"
nextButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Проверить, выбран ли какой-либо радио-батон
    var selectedRadio = this.parentNode.querySelector('input:checked');
    if (selectedRadio) {
      // Получить выбранный ответ
      var answer = selectedRadio.value;

      // Обработать ответ
      if (answer === 'yes') {
        var question = selectedRadio.getAttribute('name');
        handleAnswer(question);
      }

      // Скрыть текущий вопрос
      questions[currentQuestion].style.display = 'none';
      currentQuestion++;

      // Если есть следующий вопрос, показать его
      if (currentQuestion < questions.length) {
        questions[currentQuestion].style.display = 'block';
      } else {
        // Иначе показать кнопку отправки
        document.querySelector('button[type="submit"]').style.display = 'block';
      }
    } else {
      // Если не выбран ни один радио-батон, показать сообщение об ошибке или не делать ничего
      alert('Пожалуйста, выберите ответ перед продолжением.');
    }
  });
});

// Функция для обработки ответов
function handleAnswer(question) {
  var professions = question.split(','); // Разделяем строку с именами профессий на массив
  professions.forEach(function(profession) {
    switch (profession.trim()) { // Удаляем пробелы в начале и конце имени профессии
      case 'mechanic':
          mechanicCount++; //механик
          break;
      case 'electrician':
          electricianCount++; //электрик
          break;
      case 'surveyor':
          surveyorCount++; //землемер
          break;
      case 'automechanic':
          automechanicCount++; //автомеханик
          break;
      case 'agronomist':
          agronomistCount++; //агроном
          break;
      case 'programmer':
          programmerCount++; //программист
          break;
      case 'lawyer':
          lawyerCount++; //юрист
          break;
      case "bookkeeper":
          bookkeeperCount++; //бухгалтер
          break;
      case "gasman":
          gasmanCount++; //газовщик
          break;
      default:
        break;
    }
  });
}

// Добавляем обработчик события на форму для вывода результатов при отправке формы
document.getElementById('career-test').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы

    console.log('Результаты:');
    console.log('Механик:', mechanicCount);
    console.log('Электрик:', electricianCount);
    console.log('Землемер:', surveyorCount);
    console.log('Автомеханик:', automechanicCount);
    console.log('Агроном:', agronomistCount);
    console.log('Программист:', programmerCount);
    console.log('Юрист:', lawyerCount);
    console.log('Бухгалтер:', bookkeeperCount);
    console.log('Газовщик:', gasmanCount);

    // Сохраняем результаты в localStorage
    localStorage.setItem('mechanicScore', mechanicCount);
    localStorage.setItem('electricianScore', electricianCount);
    localStorage.setItem('surveyorScore', surveyorCount);
    localStorage.setItem('automechanicScore', automechanicCount);
    localStorage.setItem('agronomistScore', agronomistCount);
    localStorage.setItem('programmerScore', programmerCount);
    localStorage.setItem('lawyerScore', lawyerCount);
    localStorage.setItem('bookkeeperScore', bookkeeperCount);
    localStorage.setItem('gasmanScore', gasmanCount);

    // Перенаправляем на страницу результатов
    window.location.href = 'result.html';
});

/*
// Получаем кнопку "Назад"
var prevButton = document.getElementById('prev');

// Скрываем кнопку "Назад" на первом вопросе
prevButton.style.display = 'none';

// Добавляем обработчик событий на кнопку "Назад"
prevButton.addEventListener('click', function() {
  // Переходим на предыдущую страницу
  window.history.back();
}); 
*/


