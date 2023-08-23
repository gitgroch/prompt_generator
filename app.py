from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/generate-prompt', methods=['POST'])
def generate_prompt():
    data = request.json

    prompt = f"{data['style_of_photo']} photo of a {data['subject']}, {data['important_feature']}, {data['more_details']}, {data['pose_or_action']}, {data['framing']}, {data['setting_background']}, {data['lighting']}, {data['camera_angle']}, {data['camera_properties']}, in style of {data['photographer']}"

    return jsonify({"prompt": prompt})

if __name__ == '__main__':
    app.run(debug=True)
