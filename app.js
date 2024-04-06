const pomodoro = document.getElementById('pomodoro');

pomodoro.addEventListener('click',()=>{

    window.open("./Pomodoro_Timer_muskan/index.html","_blank");
});

const todoApp = document.querySelector("#todo-link");

todoApp.addEventListener('click',()=>{

    window.open("./todoList/index.html","_blank");
});

const myCourses = document.getElementById('course');

myCourses.addEventListener('click',()=>{

    window.open("./courses/MyCourses.html","_blank");
});


const browseCourses = document.getElementById('browseCourse');

browseCourses.addEventListener('click',()=>{

    window.open("./BrowseCourse/file.html","_blank");
})