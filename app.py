from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/generate-prompt', methods=['POST'])
def generate_prompt():
    data = request.json

    # Constructing the prompt using list comprehension
    prompt_parts = [
        f"{data['style_of_photo']} photo of a {data['subject']}",
        data['important_feature'],
        data['more_details'],
        data['pose_or_action'],
        data['framing'],
        data['setting_background'],
        data['lighting'],
        data['camera_angle'],
        data['camera'], 
        data['lenses'],
        data['f_stop'],
        data['film'],
        data['filters_and_effects_1'],
        data['filters_and_effects_2'],
        data['filters_and_effects_3'],
        f"in the style of {data['photographer']}"
    ]

    # Joining the parts with a comma, but only if they are not blank
    prompt = ', '.join([part for part in prompt_parts if part])

    return jsonify({'prompt': prompt})

if __name__ == '__main__':
    app.run(debug=True)
