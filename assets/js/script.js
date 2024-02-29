// Prints message one letter at a time
function printMessage(message) {
    clearInterval(interval); // Clear any existing interval
    document.getElementById('loveLetterOutput').textContent = ''; // Clear existing text
    document.getElementById('loveLetterOutput').style.display = 'flex'; // Show message box
    document.getElementById('copyButton').style.display = 'inline-block'; // Show the copy icon
    document.getElementById('whatsapp-button').style.display = 'inline-block'; // Show WhatsApp icon
    document.getElementById('refresh-anchor').style.display = 'inline-block'; // Show refresh icon
    let index = 0;
    interval = setInterval(function () {
        if (index < message.length) {
            document.getElementById('loveLetterOutput').textContent += message.charAt(index);
            index++;
        } else {
            clearInterval(interval);
        }
    }, 45); // ms pause between letters. 70: slow reading, 40 quick reading
}

// Define global variable, used in multiple places
let interval;

document.getElementById('generateButton').addEventListener('click', function () {
    clearInterval(interval); // Clear existing interval
    const toName = document.getElementById('toName').value;
    const fromName = document.getElementById('fromName').value;
    const extraWords = document.getElementById('extraWords').value;
    const prompt = `Write a romantic love letter from ${fromName} to ${toName}. The love letter MUST include ALL of the following words: "${extraWords}".`;

    const options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            'Authorization': 'Bearer hwdq6RgpdMxfXP2q7Oig0xmobkSo2pEZ' // Insert your AI21 API key here
        },
        body: JSON.stringify({
            prompt: prompt,
            numResults: 1,
            maxTokens: 250, // Adjust based on your needs
            temperature: 0.7,
            topP: 1,
            frequencyPenalty: {
                scale: 0,
                applyToWhitespaces: true,
                applyToPunctuations: true,
                applyToNumbers: true,
                applyToStopwords: true,
                applyToEmojis: true
            },
            presencePenalty: {
                scale: 0,
                applyToWhitespaces: true,
                applyToPunctuations: true,
                applyToNumbers: true,
                applyToStopwords: true,
                applyToEmojis: true
            },
            // You can adjust or remove penalties as needed for your specific use case
        })
    };

    fetch('https://api.ai21.com/studio/v1/j2-mid/complete', options)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // Adjust how you access the generated text based on AI21's response structure
            if (data.completions && data.completions.length > 0) {
                showHearts();
                const generatedMessage = data.completions[0].data.text;
                printMessage(generatedMessage); // Call printMessage with the generated message
            } else {
                document.getElementById('loveLetterOutput').textContent = 'Failed to generate love letter. Please try again.';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('loveLetterOutput').textContent = 'Failed to generate love letter. Please try again.';
        });
});

async function showHearts() {
    // code to show hearts and handle disappear logic
    document.getElementById("heart").classList.remove("hidden");
    await new Promise((resolve) => setTimeout(resolve, 3000)); // Wait for 4 seconds
    document.getElementById("heart").classList.add("hidden");
}


//Show notification function
function showNotification(message, duration = 4000) {
    const notificationEl = document.getElementById('notification');
    notificationEl.textContent = message; // Set the message
    notificationEl.classList.add('show'); // Make it visible

    // Hide the notification after 'duration' milliseconds
    setTimeout(() => {
        notificationEl.classList.remove('show');
    }, duration);
}


// Listen for clicks on the copy button
document.getElementById('copyButton').addEventListener('click', function () {
    event.preventDefault();
    // Get the text you want to copy
    const textToCopy = document.getElementById('loveLetterOutput').innerText;
    // Use the Clipboard API to copy the text
    navigator.clipboard.writeText(textToCopy).then(() => {
        // Optional: Give feedback to the user that text was copied.
        showNotification('Love letter copied to clipboard!');
        //alert('Love letter copied to clipboard!');
    }).catch(err => {
        console.error('Error copying text: ', err);
    });
});

//Sharing message on whatsapp
function shareOnWhatsApp() {
    var loveLetterText = document.getElementById('loveLetterOutput').innerText;
    var whatsappUrl = "https://wa.me/?text=" + encodeURIComponent(loveLetterText);
    window.open(whatsappUrl, '_blank');
}

// Refresh page
function refreshPage() {
    window.location.reload();
}

const alphabeticInputs = document.querySelectorAll('.form-control');

alphabeticInputs.forEach((input) => {
    input.addEventListener('input', function (event) {
        // Get the entered value
        const enteredValue = event.target.value;

        // Replace any characters that are not alphabets or punctuation with an empty string
        const sanitizedValue = enteredValue.replace(/[^a-zA-Z.,!?;:'"\s]/g, '');

        // Update the input field value with the sanitized value
        event.target.value = sanitizedValue;
    })
});

//  // Dark mode toggle
const body = document.querySelector('body');
const toggle = document.querySelector('#toggle-btn');
toggle.addEventListener('click', () => {
    toggle.classList.toggle('dark');
    body.classList.toggle('dark');
});