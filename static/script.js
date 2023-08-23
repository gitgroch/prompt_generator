function generatePrompt() {
    // Fetching values from each dropdown
    const style_of_photo = document.getElementById("style_of_photo").value;
    const subject = document.getElementById("subject").value;
    const important_feature = document.getElementById("important_feature").value;
    const more_details = document.getElementById("more_details").value;
    const pose_or_action = document.getElementById("pose_or_action").value;
    const framing = document.getElementById("framing").value;
    const setting_background = document.getElementById("setting_background").value;
    const lighting = document.getElementById("lighting").value;
    const camera_angle = document.getElementById("camera_angle").value;
    const camera_properties = document.getElementById("camera_properties").value;
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
        camera_properties: camera_properties,
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
