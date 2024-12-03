from flask import Blueprint
from flask_cors import CORS

main_bp = Blueprint('main', __name__)
CORS(main_bp)

from app.main.controller.user_controller import user_bp
main_bp.register_blueprint(user_bp, url_prefix='/user')

from app.main.controller.file_controller import file_bp
main_bp.register_blueprint(file_bp, url_prefix='/image')
