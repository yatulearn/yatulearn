from flask import Flask, jsonify
from flask_cors import CORS 
from groq import Groq

app = Flask(__name__)
CORS(app) 

def get_thought_of_the_day():
    client = Groq(
        api_key="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",  # Your Groq API key
    )
    chat_completion = client.chat.completions.create(
        messages=[
            {
                "role": "user",
                "content": "give daily motivation only in one short line",
            }
        ],
        model="llama3-8b-8192",
    )
    return chat_completion.choices[0].message.content

@app.route('/thought', methods=['GET'])
def thought():
    thought_of_the_day = get_thought_of_the_day()
    return jsonify({"thought": thought_of_the_day})

if __name__ == '__main__':
    app.run(debug=True)
