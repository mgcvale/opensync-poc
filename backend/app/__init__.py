import os
from flask import Flask, request, jsonify

from app.main.service.user_service import UserService

def create_app():
    app = Flask(__name__)

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

    from app.main import main_bp as main_bp
    app.register_blueprint(main_bp)

    return app
