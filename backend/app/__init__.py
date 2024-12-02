import os
from flask import Flask, request, jsonify, Response
from flask_cors import CORS

from app.main.service.user_service import UserService

def create_app():
    app = Flask(__name__)
    CORS(app, resources={r"/*": {"origins": "*"}})

    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False  # Disable modification tracking

    from app.main.extensions import db
    db.init_app(app)
    app.extensions['db'] = db
    with app.app_context():
        from app.main.model.user import User
        db.create_all()

    user_service = UserService(db)
    app.extensions['user_service'] = user_service

    cwd = os.getcwd()
    print(cwd)
    data_dir = os.path.join(cwd, "uploads")
    print(data_dir)
    os.makedirs(data_dir, exist_ok=True)
    app.config['data_dir'] = os.path.join(data_dir)
    app.config['image_prefix_size'] = 8

    @app.route("/", methods=['GET'])
    def index():
        return jsonify({"url_map": app.url_map.__str__()}), 200

    @app.before_request
    def handle_options():
        if request.method == "OPTIONS":
            response = Response()
            response.headers.add("Access-Control-Allow-Origin", "*")
            response.headers.add("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
            response.headers.add("Access-Control-Allow-Headers", "Content-Type, Authorization")
            response.status_code = 204  # No Content
            return response

    from app.main import main_bp as main_bp
    app.register_blueprint(main_bp)

    return app
