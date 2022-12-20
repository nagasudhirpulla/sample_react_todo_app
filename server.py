from flask import Flask, render_template
# from src.config.appConfig import loadAppConfig

# get application config
# appConfig = loadAppConfig()

app = Flask(__name__)
# app.json_encoder = ServerJSONEncoder

# Set the secret key to some random bytes
# app.secret_key = appConfig['flaskSecret']
app.secret_key= "000000000!!783g8daw67fa"
# limit max upload file size to 10 MB
app.config['MAX_CONTENT_LENGTH'] = 10 * 1024 * 1024


@app.route('/')
def index():
    return render_template('index.html.j2')
    # return "Hello"





if __name__ == '__main__':
    # app.run(host=appConfig['flaskHost'], port=int(
    #         appConfig['flaskPort']), debug=True)
    app.run( port=8080, debug=True)