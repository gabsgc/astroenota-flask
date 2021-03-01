from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/canto')
def canto():
    return render_template('canto.html')

@app.route('/carreira')
def carreira():
    return render_template('carreira.html')

@app.route('/contato')
def contato():
    return render_template('contato.html')

@app.route('/corda')
def corda():
    return render_template('corda.html')

@app.route('/cursos')
def cursos():
    return render_template('cursos.html')

@app.route('/matricula')
def matricula():
    return render_template('matricula.html')

@app.route('/piano')
def piano():
    return render_template('piano.html')

@app.route('/sobre')
def sobre():
    return render_template('sobre.html')

@app.route('/sopro')
def sopro():
    return render_template('sopro.html')


if __name__ == '__main__':
    app.run(debug=True)
    