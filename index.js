memory_track = 0;
track=1;
option_tracker = 0;

function displayCake() 
{
    var disp_cake = document.getElementById("cake1");
    disp_cake.className = disp_cake.className.replace(/\bdisplay-none\b/g, "cake");

    var start_btn = document.getElementById("start-btn");
    start_btn.classList.add("display-none");

    var start_btn2 = document.getElementById("start-btn2");
    start_btn2.classList.remove("display-none");

    var body = document.getElementById("body-init");
    body.classList.add("body-start");

    var bulbs_off = document.getElementById("bulbs-off");
    bulbs_off.classList.remove("display-none");
    bulbs_off.classList.add("bulb-container");

    var bulbs_on = document.getElementById("bulbs-on");
    bulbs_on.classList.remove("display-none");
    bulbs_on.classList.add("bulb-container");
}

function blowCandle() 
{
    var audio = document.getElementById("background-audio");
    audio.play();

    var body = document.getElementById("body-init");
    body.classList.remove("body-start");
    body.classList.add("body-active");

    var disp_cake = document.getElementById("cake1");
    disp_cake.classList.add("display-none");

    var start_btn = document.getElementById("start-btn2");
    start_btn.classList.add("display-none");

    var disp_balloons = document.getElementById("balloons");
    balloons.className = balloons.className.replace(/\bdisplay-none\b/g, "balloon-panel");

    var disp_sidemenu = document.getElementById("side-menu");
    disp_sidemenu.className = disp_sidemenu.className.replace(/\bdisplay-none\b/g, "sidebar");

    var title = document.getElementById("title-container");
    title.className = title.className.replace(/\bdisplay-none\b/g, "title-container");

    var slideshow = document.getElementById("photo-slideshow");
    slideshow.className = slideshow.className.replace(/\bdisplay-none\b/g, "");

    var envelope = document.getElementById("envelope");
    envelope.classList.remove("display-none");

    var message_container = document.getElementById("message_container");
    message_container.classList.add("messages");
    message_container.classList.remove("display-none");

    var messages = document.getElementById("messages");
    messages.classList.add("change-content");
    messages.classList.remove("display-none");

    option_tracker = 1;
}

function toggleSideBar() 
{
    document.getElementById("side-menu").classList.toggle("active");
}

function showHome() 
{
    option_tracker = 1;

    var background_audio = document.getElementById("memory-background-audio");
    var audio1 = document.getElementById("memory-audio1");
    var audio2 = document.getElementById("memory-audio2");
    var audio3 = document.getElementById("memory-audio3");
    var audio4 = document.getElementById("memory-audio4");
    var audio5 = document.getElementById("memory-audio5");
    var audio6 = document.getElementById("memory-audio6");

    background_audio.pause();
    audio1.pause();
    audio2.pause();
    audio3.pause();
    audio4.pause();
    audio5.pause();
    audio6.pause();

    var audio = document.getElementById("background-audio");
    audio.play();

    var quiz = document.getElementById("quiz");
    quiz.classList.add("display-none");

    var quiz1 = document.getElementById("quiz1");
    quiz1.classList.add("display-none");

    var quiz2 = document.getElementById("quiz2");
    quiz1.classList.add("display-none");

    var quiz3 = document.getElementById("quiz3");
    quiz2.classList.add("display-none");

    var post_quiz = document.getElementById("post-quiz");
    post_quiz.classList.add("display-none")

    var video1 = document.getElementById("video1");
    var video2 = document.getElementById("video2");
    var video3 = document.getElementById("video3");
    video1.pause();
    video2.pause();
    video3.pause();

    var slideshow = document.getElementById("photo-slideshow");
    slideshow.classList.remove("display-none");

    var envelope = document.getElementById("envelope");
    envelope.classList.remove("display-none");

    var bulbs_off = document.getElementById("bulbs-off");
    bulbs_off.classList.remove("display-none");
    bulbs_off.classList.add("bulb-container");

    var bulbs_on = document.getElementById("bulbs-on");
    bulbs_on.classList.remove("display-none");
    bulbs_on.classList.add("bulb-container");

    var title_position = document.getElementById("title-container");
    title_position.classList.remove("title-container-hide-bulbs");
    title_position.classList.add("title-container");

    var message_container = document.getElementById("message_container");
    message_container.classList.add("messages");
    message_container.classList.remove("display-none");

    var messages = document.getElementById("message");
    messages.classList.add("change-content");
    messages.classList.remove("display-none");

    var memories = document.getElementById("memories");
    memories.classList.remove("display-none");

    toggleSideBar();
}

function showMemories()
{
    option_tracker = 2;

    var background_audio = document.getElementById("memory-background-audio");
    var audio1 = document.getElementById("memory-audio1");
    var audio2 = document.getElementById("memory-audio2");
    var audio3 = document.getElementById("memory-audio3");
    var audio4 = document.getElementById("memory-audio4");
    var audio5 = document.getElementById("memory-audio5");
    var audio6 = document.getElementById("memory-audio6");

    background_audio.pause();
    audio1.pause();
    audio2.pause();
    audio3.pause();
    audio4.pause();
    audio5.pause();
    audio6.pause();

    if(track === 1)
    {
        var slideshow = document.getElementById("photo-slideshow");
        slideshow.classList.add("display-none");
    
        var envelope = document.getElementById("envelope");
        envelope.classList.add("display-none");
    
        var quiz = document.getElementById("quiz");
        quiz.classList.remove("display-none");
    
        var video1 = document.getElementById("video1");
        video1.classList.add("display-none");
    
        var video2 = document.getElementById("video2");
        video2.classList.add("display-none");
    
        var video3 = document.getElementById("video3");
        video3.classList.add("display-none");
    
        var bulbs_off = document.getElementById("bulbs-off");
        bulbs_off.classList.add("display-none");
        bulbs_off.classList.remove("bulb-container");
    
        var bulbs_on = document.getElementById("bulbs-on");
        bulbs_on.classList.add("display-none");
        bulbs_on.classList.remove("bulb-container");
    
        var title_position = document.getElementById("title-container");
        title_position.classList.add("title-container-hide-bulbs");
        title_position.classList.remove("title-container");
    
        var message_container = document.getElementById("message_container");
        message_container.classList.remove("messages");
        message_container.classList.add("display-none");
    
        var messages = document.getElementById("message");
        messages.classList.remove("change-content");
        messages.classList.add("display-none");
    
        var audio = document.getElementById("background-audio");
        audio.pause();
    
        var quiz = document.getElementById("quiz");
        quiz.classList.add("display-none");
    
        var quiz1 = document.getElementById("quiz1");
        quiz1.classList.add("display-none");
    
        var quiz2 = document.getElementById("quiz2");
        quiz1.classList.add("display-none");
    
        var quiz3 = document.getElementById("quiz3");
        quiz2.classList.add("display-none");
    
        var post_quiz = document.getElementById("post-quiz");
        post_quiz.classList.add("display-none")
    
        var video1 = document.getElementById("video1");
        var video2 = document.getElementById("video2");
        var video3 = document.getElementById("video3");
        video1.pause();
        video2.pause();
        video3.pause();
    
        var memories = document.getElementById("memories");
        memories.classList.remove("display-none");
    
        toggleSideBar();
    
        memory_track = 1;
    
        startMemory();
    }
    else
    {
        alert("Please attempt quiz first")
    }
}
function startMemory()
{
    if(memory_track === 1)
    {
        var background_audio = document.getElementById("memory-background-audio");
        background_audio.volume = 0.4;
        background_audio.play();
    }

    var audio1 = document.getElementById("memory-audio1");
    var audio2 = document.getElementById("memory-audio2");
    var audio3 = document.getElementById("memory-audio3");
    var audio4 = document.getElementById("memory-audio4");
    var audio5 = document.getElementById("memory-audio5");
    var audio6 = document.getElementById("memory-audio6");
    
    var memory_section1 = document.getElementById("memories-section-1");
    memory_section1.classList.add("display-none");

    var memory_section2 = document.getElementById("memories-section-2");
    memory_section2.classList.add("display-none");

    var memory = document.getElementsByClassName("memory");
    
    memory[0].classList.add("display-none");
    memory[1].classList.add("display-none");
    memory[2].classList.add("display-none");
    memory[3].classList.add("display-none");
    memory[4].classList.add("display-none");
    memory[5].classList.add("display-none");

    if(memory_track === 1)
    {
        audio1.play();
        memory[0].classList.remove("display-none");
        memory_track++;
        memory_section1.classList.remove("display-none");
        window.setTimeout(startMemory,31000);
    }
    else if(memory_track === 2)
    {
        audio2.play();
        memory[1].classList.remove("display-none");
        memory_track++;
        memory_section1.classList.remove("display-none");
        window.setTimeout(startMemory,14000);
    }
    else if(memory_track === 3)
    {
        audio3.play();
        memory[2].classList.remove("display-none");
        memory_track++;
        memory_section1.classList.remove("display-none");
        window.setTimeout(startMemory,13000);
    }
    else if(memory_track === 4)
    {
        audio4.play();
        memory[3].classList.remove("display-none");
        memory_track++;
        memory_section1.classList.remove("display-none");
        window.setTimeout(startMemory,13000);
    }
    else if(memory_track === 5)
    {
        audio5.play();
        memory[4].classList.remove("display-none");
        memory_track++;
        memory_section2.classList.remove("display-none");
        window.setTimeout(startMemory,14000);
    }
    else if(memory_track === 6)
    {
        audio6.play();
        memory[5].classList.remove("display-none");
        memory_track++;
        memory_section2.classList.remove("display-none");
        window.setTimeout(startMemory,23000);
    }
    else if(memory_track == 7)
    {
        toggleSideBar();
        showHome();
    }
}

function showQuizes() 
{
    option_tracker = 3;

    var background_audio = document.getElementById("memory-background-audio");
    var audio1 = document.getElementById("memory-audio1");
    var audio2 = document.getElementById("memory-audio2");
    var audio3 = document.getElementById("memory-audio3");
    var audio4 = document.getElementById("memory-audio4");
    var audio5 = document.getElementById("memory-audio5");
    var audio6 = document.getElementById("memory-audio6");

    background_audio.pause();
    audio1.pause();
    audio2.pause();
    audio3.pause();
    audio4.pause();
    audio5.pause();
    audio6.pause();

    var slideshow = document.getElementById("photo-slideshow");
    slideshow.classList.add("display-none");

    var envelope = document.getElementById("envelope");
    envelope.classList.add("display-none");

    var quiz = document.getElementById("quiz");
    quiz.classList.remove("display-none");

    var video1 = document.getElementById("video1");
    video1.classList.add("display-none");

    var video2 = document.getElementById("video2");
    video2.classList.add("display-none");

    var video3 = document.getElementById("video3");
    video3.classList.add("display-none");

    var bulbs_off = document.getElementById("bulbs-off");
    bulbs_off.classList.add("display-none");
    bulbs_off.classList.remove("bulb-container");

    var bulbs_on = document.getElementById("bulbs-on");
    bulbs_on.classList.add("display-none");
    bulbs_on.classList.remove("bulb-container");

    var title_position = document.getElementById("title-container");
    title_position.classList.add("title-container-hide-bulbs");
    title_position.classList.remove("title-container");

    var message_container = document.getElementById("message_container");
    message_container.classList.remove("messages");
    message_container.classList.add("display-none");

    var messages = document.getElementById("message");
    messages.classList.remove("change-content");
    messages.classList.add("display-none");

    var memories = document.getElementById("memories");
    memories.classList.add("display-none");

    toggleSideBar();

    showQuiz1();
}

function showQuiz1() 
{
    audio = document.getElementById("background-audio");
    audio.play();

    var quiz1 = document.getElementById("quiz1");
    quiz1.classList.remove("display-none");

    var quiz2 = document.getElementById("quiz2");
    quiz2.classList.add("display-none");

    var quiz3 = document.getElementById("quiz3");
    quiz3.classList.add("display-none");

    var post_quiz = document.getElementById("post-quiz");
    post_quiz.classList.add("display-none")
}

function showQuiz2() 
{
    audio = document.getElementById("background-audio");
    audio.play();

    var quiz1 = document.getElementById("quiz1");
    quiz1.classList.add("display-none");

    var quiz2 = document.getElementById("quiz2");
    quiz2.classList.remove("display-none");

    var quiz3 = document.getElementById("quiz3");
    quiz3.classList.add("display-none");

    var post_quiz = document.getElementById("post-quiz");
    post_quiz.classList.add("display-none")
}

function showQuiz3() 
{
    audio = document.getElementById("background-audio");
    audio.play();

    var quiz1 = document.getElementById("quiz1");
    quiz1.classList.add("display-none");

    var quiz2 = document.getElementById("quiz2");
    quiz2.classList.add("display-none");

    var quiz3 = document.getElementById("quiz3");
    quiz3.classList.remove("display-none");

    var post_quiz = document.getElementById("post-quiz");
    post_quiz.classList.add("display-none")
}

function showPostQuiz() 
{
    audio = document.getElementById("background-audio");
    audio.play();

    track=1

    var quiz1 = document.getElementById("quiz1");
    quiz1.classList.add("display-none");

    var quiz2 = document.getElementById("quiz2");
    quiz2.classList.add("display-none");

    var quiz3 = document.getElementById("quiz3");
    quiz3.classList.add("display-none");

    var post_quiz = document.getElementById("post-quiz");
    post_quiz.classList.remove("display-none");
}

function checkQuiz1() 
{
    answers = ["BHAKTI", "KHUSHI", "LABDHI", "LABDHI", "NIDHI", "PUSHTI", "RIYA", "RUCHITA", "SAKSHI", "SAMIKSHA"];
    var submit = document.getElementById("submit-quiz1");
    var video = document.getElementById("video1");
    var input_value1 = document.getElementById("quiz-textbox1_1").value;
    var input_value2 = document.getElementById("quiz-textbox1_2").value;
    var input_value3 = document.getElementById("quiz-textbox1_3").value;
    var input_value4 = document.getElementById("quiz-textbox1_4").value;
    var input_value5 = document.getElementById("quiz-textbox1_5").value;
    var input_value6 = document.getElementById("quiz-textbox1_6").value;
    var input_value7 = document.getElementById("quiz-textbox1_7").value;
    var input_value8 = document.getElementById("quiz-textbox1_8").value;
    var input_value9 = document.getElementById("quiz-textbox1_9").value;
    var input_value10 = document.getElementById("quiz-textbox1_10").value;

    var input_values = [input_value1, input_value2, input_value3, input_value4, input_value5, input_value6, input_value7, input_value8, input_value9, input_value10];

    submit.addEventListener("click", checkAnswer(1, input_values, answers, video));
    video.addEventListener("ended", closeFullScreen);
    video.addEventListener("ended", showQuiz2, false);
    video.addEventListener("ended", removeVideoAttribute(video), false);
}

function checkQuiz2() 
{
    answers = ["AAKASH", "AKSHIT", "AMIT", "HARDIK", "JAI", "JEET", "MANAV", "RUDRA", "URVESH"];
    var submit = document.getElementById("submit-quiz2");
    var video = document.getElementById("video2");
    var input_value1 = document.getElementById("quiz-textbox2_1").value;
    var input_value2 = document.getElementById("quiz-textbox2_2").value;
    var input_value3 = document.getElementById("quiz-textbox2_3").value;
    var input_value4 = document.getElementById("quiz-textbox2_4").value;
    var input_value5 = document.getElementById("quiz-textbox2_5").value;
    var input_value6 = document.getElementById("quiz-textbox2_6").value;
    var input_value7 = document.getElementById("quiz-textbox2_7").value;
    var input_value8 = document.getElementById("quiz-textbox2_8").value;
    var input_value9 = document.getElementById("quiz-textbox2_9").value;

    var input_values = [input_value1, input_value2, input_value3, input_value4, input_value5, input_value6, input_value7, input_value8, input_value9];

    submit.addEventListener("click", checkAnswer(2, input_values, answers, video));
    video.addEventListener("ended", closeFullScreen);
    video.addEventListener("ended", showQuiz3, false);
    video.addEventListener("ended", removeVideoAttribute(video), false);
}

function checkQuiz3() 
{
    answers = "FAMILY"
    var submit = document.getElementById("submit-quiz3");
    var video = document.getElementById("video3");
    var input_value1 = document.getElementById("quiz-textbox3_1").value;

    submit.addEventListener("click", checkAnswer(3, input_value1, answers, video));
    video.addEventListener("ended", closeFullScreen);
    video.addEventListener("ended", showPostQuiz, false);
    video.addEventListener("ended", removeVideoAttribute(video), false);   
}

function capitalizeTextboxContents(quiz_no)
{
    if(quiz_no === 1)
    {
        var input_value1 = document.getElementById("quiz-textbox1_1");
        var input_value2 = document.getElementById("quiz-textbox1_2");
        var input_value3 = document.getElementById("quiz-textbox1_3");
        var input_value4 = document.getElementById("quiz-textbox1_4");
        var input_value5 = document.getElementById("quiz-textbox1_5");
        var input_value6 = document.getElementById("quiz-textbox1_6");
        var input_value7 = document.getElementById("quiz-textbox1_7");
        var input_value8 = document.getElementById("quiz-textbox1_8");
        var input_value9 = document.getElementById("quiz-textbox1_9");
        var input_value10 = document.getElementById("quiz-textbox1_10");

        input_value1.value = input_value1.value.toUpperCase();
        input_value2.value = input_value2.value.toUpperCase();
        input_value3.value = input_value3.value.toUpperCase();
        input_value4.value = input_value4.value.toUpperCase();
        input_value5.value = input_value5.value.toUpperCase();
        input_value6.value = input_value6.value.toUpperCase();
        input_value7.value = input_value7.value.toUpperCase();
        input_value8.value = input_value8.value.toUpperCase();
        input_value9.value = input_value9.value.toUpperCase();
        input_value10.value = input_value10.value.toUpperCase();
    }
    else if(quiz_no === 2)
    {
        var input_value1 = document.getElementById("quiz-textbox2_1");
        var input_value2 = document.getElementById("quiz-textbox2_2");
        var input_value3 = document.getElementById("quiz-textbox2_3");
        var input_value4 = document.getElementById("quiz-textbox2_4");
        var input_value5 = document.getElementById("quiz-textbox2_5");
        var input_value6 = document.getElementById("quiz-textbox2_6");
        var input_value7 = document.getElementById("quiz-textbox2_7");
        var input_value8 = document.getElementById("quiz-textbox2_8");
        var input_value9 = document.getElementById("quiz-textbox2_9");
        var input_value10 = document.getElementById("quiz-textbox2_10");

        input_value1.value = input_value1.value.toUpperCase();
        input_value2.value = input_value2.value.toUpperCase();
        input_value3.value = input_value3.value.toUpperCase();
        input_value4.value = input_value4.value.toUpperCase();
        input_value5.value = input_value5.value.toUpperCase();
        input_value6.value = input_value6.value.toUpperCase();
        input_value7.value = input_value7.value.toUpperCase();
        input_value8.value = input_value8.value.toUpperCase();
        input_value9.value = input_value9.value.toUpperCase();
        input_value10.value = input_value10.value.toUpperCase();
    }
    else if(quiz_no === 3)
    {
        var input_value1 = document.getElementById("quiz-textbox3_1");
        input_value1.value = input_value1.value.toUpperCase();
    }
}

function removeVideoAttribute(video) 
{
    video.setAttribute("hidden");
    video.removeAttribute("autoplay");
    video.classList.add("display-none");
}

function checkAnswer(quiz_no, input_values, answers, video) 
{
    if(quiz_no === 1 || quiz_no === 2)
    {
        if (input_values[0] === answers[0] && input_values[1] === answers[1] && input_values[2] === answers[2] && input_values[3] === answers[3] && input_values[4] === answers[4] && input_values[5] === answers[5] && input_values[6] === answers[6] && input_values[7] === answers[7] && input_values[8] === answers[8]) 
        {
            if(quiz_no === 1)
            {
                if(input_values[0] === answers[0])
                {
                    audio = document.getElementById("background-audio")
                    audio.pause();
                    video.classList.remove("display-none");
                    video.removeAttribute("hidden")
                    video.setAttribute("autoplay", "");
                    openFullScreen(video);
                    video.currentTime = 0;
                    video.play();

                    document.getElementById("quiz-textbox1_1").value = "";
                    document.getElementById("quiz-textbox1_2").value = "";
                    document.getElementById("quiz-textbox1_3").value = "";
                    document.getElementById("quiz-textbox1_4").value = "";
                    document.getElementById("quiz-textbox1_5").value = "";
                    document.getElementById("quiz-textbox1_6").value = "";
                    document.getElementById("quiz-textbox1_7").value = "";
                    document.getElementById("quiz-textbox1_8").value = "";
                    document.getElementById("quiz-textbox1_9").value = "";
                    document.getElementById("quiz-textbox1_10").value = "";
                }
                else 
                {
                    alert("Wrong answer");
                }
            }
            else if(quiz_no === 2)
            {
                audio = document.getElementById("background-audio")
                audio.pause();
                video.classList.remove("display-none");
                video.removeAttribute("hidden")
                video.setAttribute("autoplay", "");
                openFullScreen(video);
                video.currentTime = 0;
                video.play();

                document.getElementById("quiz-textbox2_1").value = "";
                document.getElementById("quiz-textbox2_2").value = "";
                document.getElementById("quiz-textbox2_3").value = "";
                document.getElementById("quiz-textbox2_4").value = "";
                document.getElementById("quiz-textbox2_5").value = "";
                document.getElementById("quiz-textbox2_6").value = "";
                document.getElementById("quiz-textbox2_7").value = "";
                document.getElementById("quiz-textbox2_8").value = "";
                document.getElementById("quiz-textbox2_9").value = "";
            } 
        }
        else 
        {
            alert("Wrong answer");
        }
    }
    else if(quiz_no === 3)
    {
        if(input_values === answers)
        {
            audio = document.getElementById("background-audio")
            audio.pause();
            video.classList.remove("display-none");
            video.removeAttribute("hidden")
            video.setAttribute("autoplay", "");
            openFullScreen(video);
            video.currentTime = 0;
            video.play();

            document.getElementById("quiz-textbox3_1").value = "";
        }
        else
        {
            alert("Wrong answer");
        }
    } 
}

function openFullScreen(video) 
{
    if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.mozRequestFullScreen) { /* Firefox */
        video.mozRequestFullScreen();
      } else if (video.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) { /* IE/Edge */
        video.msRequestFullscreen();
      }
}

function closeFullScreen()
{
    if (document.exitFullscreen) 
    {
        document.exitFullscreen();
    } 
    else if (document.mozCancelFullScreen) 
    {
        document.mozCancelFullScreen();  
    } 
    else if (document.webkitExitFullscreen) 
    { 
        document.webkitExitFullscreen();
    } 
    else if (document.msExitFullscreen) 
    {
        document.msExitFullscreen();
    }
}
