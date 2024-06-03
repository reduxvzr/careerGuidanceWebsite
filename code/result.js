document.addEventListener('DOMContentLoaded', function() {
    var mechanicScore = localStorage.getItem('mechanicScore');
    var electricianScore = localStorage.getItem('electricianScore');
    var surveyorScore = localStorage.getItem('surveyorScore');
    var automechanicScore = localStorage.getItem('automechanicScore');
    var agronomistScore = localStorage.getItem('agronomistScore');
    var programmerScore = localStorage.getItem('programmerScore');
    var lawyerScore = localStorage.getItem('lawyerScore');
    var bookkeeperScore = localStorage.getItem('bookkeeperScore');
    var gasmanScore = localStorage.getItem('gasmanScore');

    var maxScore = Math.max(mechanicScore, electricianScore, surveyorScore, automechanicScore,
        agronomistScore, programmerScore, lawyerScore, bookkeeperScore, gasmanScore
    );
    var profession = '';

    if (maxScore == mechanicScore) {
        profession = 'Механик';
    } else if (maxScore == electricianScore) {
        profession = 'Электрик';
    } else if (maxScore == surveyorScore) {
        profession = 'Землемер';
    } else if (maxScore == automechanicScore) {
        profession = 'Автомеханик';
    } else if (maxScore == agronomistScore) {
        profession = 'Агроном';
    } else if (maxScore == programmerScore) {
        profession = 'Программист';
    } else if (maxScore == lawyerScore) {
        profession = 'Юрист';
    } else if (maxScore == bookkeeperScore) {
        profession = 'Бухгалтер';
    } else if (maxScore == gasmanScore) {
        profession = 'Газовщик';
    }   

    document.getElementById('profession').textContent = 'Наиболее подходящая профессия для Вас: ' + profession + '!';

    var ctx = document.getElementById('chart').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Механик', 'Электрик', 'Землемер', 'Автомеханик', 'Агроном', 'Программист', 'Юрист', 'Бухгалтер', 'Газовщик'],
            datasets: [{
                label: 'Очки',
                data: [mechanicScore, electricianScore, surveyorScore, automechanicScore, agronomistScore, programmerScore, lawyerScore, bookkeeperScore, gasmanScore],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});

