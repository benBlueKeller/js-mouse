from flask import Flask, render_template

<<<<<<< HEAD
app = Flask(__name__, static_folder="../static/dist", template_folder="../static")

@app.route("/")
def index():
    return render_template("index.html")

if __name__ == "__main__":
    app.run()
=======
app = Flask
>>>>>>> 2b9cbe7745be87c50a521e1eb1b9cc772e5cc29d
