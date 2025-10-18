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


function submitAnswer1() {
    const challenge1Input = document.querySelector('.challenge-1-input');

    if(challenge1Input.value === 'O') {
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

    if(challenge2Input.value === 'O') {
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

    if(challenge3Input.value === 'O') {
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

    if (challenge4Input.value === 'O') {

        alert(`Congratulations! You have completed all challenges.`);

        location.reload();
    } else {
        alert('Incorrect Password! Try again.');
    }
}
