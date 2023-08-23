function generatePrompt() {
    // Fetching values from each dropdown and textarea
    const style_of_photo = document.getElementById("style_of_photo").value;
    const subject = document.getElementById("subject").value;
    const important_feature = document.getElementById("important_feature").value;
    const more_details = document.getElementById("more_details").value;
    const pose_or_action = document.getElementById("pose_or_action").value;
    const framing = document.getElementById("framing").value;
    const setting_background = document.getElementById("setting_background").value;
    const lighting = document.getElementById("lighting").value;
    const camera_angle = document.getElementById("camera_angle").value;
    const camera = document.getElementById("camera").value;
    const lenses = document.getElementById("lenses").value;
    const f_stop = document.getElementById("f_stop").value;
    const film = document.getElementById("film").value;
    const filters_and_effects_1 = document.getElementById("filters_and_effects_1").value;
    const filters_and_effects_2 = document.getElementById("filters_and_effects_2").value;
    const filters_and_effects_3 = document.getElementById("filters_and_effects_3").value;
    const photographer = document.getElementById("photographer").value;

    const data = {
        style_of_photo: style_of_photo,
        subject: subject,
        important_feature: important_feature,
        more_details: more_details,
        pose_or_action: pose_or_action,
        framing: framing,
        setting_background: setting_background,
        lighting: lighting,
        camera_angle: camera_angle,
        camera: camera,
        lenses: lenses,
        f_stop: f_stop,
        film: film,
        filters_and_effects_1: filters_and_effects_1,
        filters_and_effects_2: filters_and_effects_2,
        filters_and_effects_3: filters_and_effects_3,
        photographer: photographer
    };

    fetch('/generate-prompt', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("promptOutput").innerText = data.prompt;
    });  
}

document.getElementById('randomizePrompt').addEventListener('click', function() {
    // For each select element, choose a random option
    const selects = document.querySelectorAll('select');
    selects.forEach(select => {
        const options = select.options;
        const randomIndex = Math.floor(Math.random() * options.length);
        select.selectedIndex = randomIndex;
    });

    // Now generate the prompt using the randomized selections
    generatePrompt();
});

function copyToClipboard() {
    const textarea = document.getElementById('promptOutput');
    textarea.select();
    document.execCommand('copy');
    alert('Prompt copied to clipboard!');
}



