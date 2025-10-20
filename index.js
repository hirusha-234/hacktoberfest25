const svg = document.querySelector('.svg-pattern');
if (svg) {
    const height = svg.getBoundingClientRect().height;

    svg.style.top = `${(window.innerHeight * 0.91) - height}px`;
} else {
    console.error('Element not found');
}

// Enhanced particle system
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDuration = (Math.random() * 10 + 5) + 's';
    particle.style.animationDelay = Math.random() * 5 + 's';
    document.querySelector('.particles').appendChild(particle);
    
    // Remove particle after animation
    setTimeout(() => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
        }
    }, 15000);
}

// Create particles periodically
setInterval(createParticle, 2000);


// Add sparkle effect on button hover
document.querySelector('.start-button').addEventListener('mouseenter', () => {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            createParticle();
        }, i * 100);
    }
});



function svgWidth() {
    const svg = document.querySelector('.svg-pattern');
    if (svg) {
        const height = svg.getBoundingClientRect().height;

        svg.style.top = `${(window.innerHeight * 0.91) - height}px`;
    } else {
        console.error('Element not found');
    }
}


let isStarted = false;

const timer = document.querySelector('.timer');

function startTimer() {
    let time = localStorage.getItem('timeLeft') ? parseInt(localStorage.getItem('timeLeft')) : 2400; // time in seconds

    const intervalId = setInterval(() => {
        time--;
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;

        timer.innerHTML = `Time Left: ${minutes}m ${seconds}s`;

        // Save the current time to local storage
        localStorage.setItem('timeLeft', time);

        // Stop the timer when it reaches 0
        if (time <= 0) {
            clearInterval(intervalId);
            localStorage.removeItem('timeLeft'); // Clear the time when finished
            timer.innerHTML = 'Time Left: 0m 0s'; // Update display
            alert('Time is up!');
            location.reload();
        }
    }, 1000);
}

function showTimer() {
    let time = localStorage.getItem('timeLeft') ? parseInt(localStorage.getItem('timeLeft')) : 2400; // time in seconds

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    timer.innerHTML = `Time Left: ${minutes}m ${seconds}s`;
}

window.onload = () => {
    showTimer();
}


function startChallenge() {
    const startButton = document.querySelector('.start-button');
    const title = document.querySelector('.title');
    const description = document.querySelector('.description');
    const divider = document.querySelector('.divider');
    const challengeContainer = document.querySelector('.challenge-container');
    const line1 = document.querySelector('.line-1');
    const line2 = document.querySelector('.line-2');
    const line3 = document.querySelector('.line-3');
    const line4 = document.querySelector('.line-4');
    const line5 = document.querySelector('.line-5');
    const line6 = document.querySelector('.line-6');
    const line7 = document.querySelector('.line-7');

    const input1 = document.querySelector('.input-1');

    // Hide intro elements
    startButton.style.display = 'none';
    title.style.display = 'none';
    description.style.display = 'none';
    divider.style.display = 'none';

    // Show challenge container
    challengeContainer.style.display = 'flex';

    // Show line 1
    line1.style.display = 'inline-block';

    // Show line 2 after 3.2 seconds
    setTimeout(() => {
        line2.style.display = 'inline-block';
    }, 3200);

    // Show line 3 and input after 4.9 seconds
    setTimeout(() => {
        line3.style.display = 'inline-block';
        input1.style.display = 'inline-block';
        input1.focus();

        // Event listener for input1's "Enter" key press
        input1.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const input1Value = input1.value;

                // Disable and blur input after entering value
                input1.blur();
                input1.setAttribute('disabled', 'true');

                // Display line 4 with user's name
                line4.innerHTML = `[Welcome ${input1Value}]`;
                setTimeout(() => {
                    line4.style.display = 'inline-block';
                }, 500);

                // Update team name in the UI
                const teamElement = document.querySelector('.team .timer-text');
                if (teamElement) {
                    teamElement.textContent = `Team: ${input1Value}`;
                }

                // Display line 5 after 1.5 seconds
                setTimeout(() => {
                    line5.style.display = 'inline-block';
                }, 1000);

                // Display line 6 after 3.2 seconds
                setTimeout(() => {
                    line6.style.display = 'inline-block';
                }, 1500);

                // Display line 7 and add "Enter" listener for redirect
                setTimeout(() => {
                    line7.style.display = 'inline-block';

                    challenge1box = document.querySelector('.challenge-1');

                    document.addEventListener('keydown', function onKeyPress(e) {
                        if (e.key === 'Enter') {
                            challengeContainer.style.display = 'none';
                            challenge1box.style.display = 'flex';
                            startTimer();
                            document.removeEventListener('keydown', onKeyPress);
                        }
                    });
                }, 2000);
            }
        });

    }, 4900);

    console.log('Challenge started');
}



// const onConfirmRefresh = function (event) {
//     event.preventDefault();
//     return event.returnValue = "Are you sure you want to leave the page?";
// }

// window.addEventListener("beforeunload", onConfirmRefresh, { capture: true });



function rot13(str) {
    return str.replace(/[A-Za-z]/g, (c) => {
        const base = c <= 'Z' ? 65 : 97;
        return String.fromCharCode(((c.charCodeAt(0) - base + 13) % 26) + base);
    });
}


const ANSWER1_OBF = 'Pvpnqn';     
const ANSWER2_OBF = '07/07/07';     
const ANSWER3_OBF = 'Cnffjbeq';    
const ANSWER4_OBF = 'Xnaanatnen';   

function submitAnswer1() {
    const challenge1Input = document.querySelector('.challenge-1-input');

    if(rot13(challenge1Input.value.trim()) === ANSWER1_OBF) {
        alert('Correct Password! You may proceed to the next challenge.');

        const challenge1box = document.querySelector('.challenge-1');
        const challenge2box = document.querySelector('.challenge-2');

        challenge1box.style.display = 'none';
        challenge2box.style.display = 'flex';
    }
    else {
        alert('Incorrect Password! Try again.');
    }
}

function submitAnswer2() {
    const challenge2Input = document.querySelector('.challenge-2-input');

    if(rot13(challenge2Input.value.trim()) === ANSWER2_OBF) {
        alert('Correct Password! You may proceed to the next challenge.');

        const challenge2box = document.querySelector('.challenge-2');
        const challenge3box = document.querySelector('.challenge-3');

        challenge2box.style.display = 'none';
        challenge3box.style.display = 'flex';
    }
    else {
        alert('Incorrect Password! Try again.');
    }
}

function submitAnswer3() {
    const challenge3Input = document.querySelector('.challenge-3-input');

    if(rot13(challenge3Input.value.trim()) === ANSWER3_OBF) {
        alert('Correct Password! You may proceed to the next challenge.');

        const challenge3box = document.querySelector('.challenge-3');
        const challenge4box = document.querySelector('.challenge-4');

        challenge3box.style.display = 'none';
        challenge4box.style.display = 'flex';
    }
    else {
        alert('Incorrect Password! Try again.');
    }
}

function submitAnswer4() {
    const challenge4Input = document.querySelector('.challenge-4-input');

    if (rot13(challenge4Input.value.trim()) === ANSWER4_OBF) {
        const challenge4box = document.querySelector('.challenge-4');
        const finishOverlay = document.querySelector('.finish-overlay');

        // snapshot team
        const teamElement = document.querySelector('.team .timer-text');
        const teamName = teamElement ? teamElement.textContent.replace('Team: ', '') : '';
        const finishTeam = document.getElementById('finish-team');
        finishTeam.textContent = teamName || 'Team_Name';

        // snapshot time left (do not stop underlying timer)
        const finishTimeLeft = document.getElementById('finish-time-left');
        finishTimeLeft.textContent = timer.textContent.replace('Time Left: ', '').trim();

        // completion time
        const finishCompletedAt = document.getElementById('finish-completed-at');
        const now = new Date();
        const hh = String(now.getHours()).padStart(2, '0');
        const mm = String(now.getMinutes()).padStart(2, '0');
        const ss = String(now.getSeconds()).padStart(2, '0');
        finishCompletedAt.textContent = `${hh}:${mm}:${ss}`;

        // show overlay and hide the last challenge box
        challenge4box.style.display = 'none';
        finishOverlay.style.display = 'block';
    } else {
        alert('Incorrect Password! Try again.');
    }
}
