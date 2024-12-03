from flask import Blueprint, request, jsonify, send_from_directory, send_file, current_app
import random
import string
import os
from io import BytesIO
from flask_cors import cross_origin, CORS
from defaults import *
from PIL import Image
import re

from app.main.service.user_service import UserService

file_bp = Blueprint('file', __name__)
CORS(file_bp)

def generate_random_string(n: int) -> str:
    return ''.join(random.choices(string.ascii_letters + string.digits, k=n))

def is_valid_filename(filename: str) -> bool:
    return re.match(r'^[a-zA-Z0-9_\-\.]+$', filename) is not None

@cross_origin
@file_bp.route('/upload', methods = ["POST"])
def upload_image():

    auth_header = request.headers.get('Authorization')
    if auth_header and auth_header.startswith("Bearer "):
        token = auth_header.split(" ")[1]
    else:
        current_app.logger.debug("User not found")
        return ret_400()

    files = request.files
    if "image" not in files:
        return ret_400()
    image = files['image']

    if not image.filename:
        return ret_400()

    if not is_valid_filename(image.filename):
        return ret_400()

    with current_app.app_context():
        user_service: UserService = current_app.extensions['user_service']
        upload_folder = current_app.config['data_dir']

        user = user_service.find_by_token(token)
        if user is None:
            current_app.logger.debug("User unauthorized")
            return ret_401()
        upload_folder = os.path.join(upload_folder, user.username)
        os.makedirs(upload_folder, exist_ok=True)

        filename = generate_random_string(current_app.config['image_prefix_size']) + "_" + image.filename
        filepath = os.path.abspath(os.path.join(upload_folder, filename))
        if not filepath.startswith(upload_folder):
            current_app.logger.debug("Filepath out of bounds")
            return ret_400()
        image.save(filepath)

    return jsonify({"message": "succes", "filename": filename}), 200

@cross_origin
@file_bp.route('/<image_name>', methods=["GET"])
def serve_image(image_name):
    auth_header = request.headers.get('Authorization')
    if auth_header and auth_header.startswith("Bearer "):
        token = auth_header.split(" ")[1]
    else:
        current_app.logger.debug("User not found")
        return ret_400()

    with current_app.app_context():
        user_service: UserService = current_app.extensions['user_service']
        upload_folder = current_app.config['data_dir']

        user = user_service.find_by_token(token)
        if user is None:
            current_app.logger.debug("User unauthorized")
            return ret_401()
        upload_folder = os.path.join(upload_folder, user.username)
        filepath = os.path.abspath(os.path.join(upload_folder, image_name))
        if not filepath.startswith(upload_folder) or not os.path.exists(filepath):
            current_app.logger.debug("Filepath out of bounds")
            return ret_400()

        return send_file(filepath, mimetype="image/jpeg")

@cross_origin
@file_bp.route('/preview/<image_name>', methods=["GET"])
def serve_preview(image_name):
    auth_header = request.headers.get('Authorization')
    if auth_header and auth_header.startswith("Bearer "):
        token = auth_header.split(" ")[1]
    else:
        current_app.logger.debug("User not found")
        return ret_400()

    with current_app.app_context():
        user_service: UserService = current_app.extensions['user_service']
        upload_folder = current_app.config['data_dir']

        user = user_service.find_by_token(token)
        if user is None:
            current_app.logger.debug("User unauthorized")
            return ret_401()
        upload_folder = os.path.join(upload_folder, user.username)

        filepath = os.path.abspath(os.path.join(upload_folder, image_name))
        if not filepath.startswith(upload_folder):
            return ret_400()

    image = Image.open(filepath)
    max_size = (360, 360)
    image.thumbnail(max_size)
    image = image.convert('RGB')

    img_io = BytesIO()
    image.save(img_io, format="JPEG", quality=40, optimize=True)
    img_io.seek(0)

    return send_file(
        img_io,
        mimetype="image/jpeg",
    )

@cross_origin
@file_bp.route('/delete/<image_name>', methods=["DELETE"])
def delete_image(image_name):
    auth_header = request.headers.get('Authorization')
    if auth_header and auth_header.startswith("Bearer "):
        token = auth_header.split(" ")[1]
    else:
        current_app.logger.debug("User not found")
        return ret_400()

    with current_app.app_context():
        user_service: UserService = current_app.extensions['user_service']
        upload_folder = current_app.config['data_dir']

        user = user_service.find_by_token(token)
        if user is None:
            current_app.logger.debug("User unauthorized")
            return ret_401()
        upload_folder = os.path.join(upload_folder, user.username)

        filepath = os.path.abspath(os.path.join(upload_folder, image_name))
        if not filepath.startswith(upload_folder):
            current_app.logger.debug("Filepath out of bounds")
            return ret_400()

    if os.path.exists(filepath):
        os.remove(filepath)
        return jsonify({'message': 'success'}), 200
    else:
        return jsonify({'message': 'File not found'}), 404

@cross_origin
@file_bp.route("/all", methods=["GET"])
def get_all_images():
    auth_header = request.headers.get('Authorization')
    if auth_header and auth_header.startswith("Bearer "):
        token = auth_header.split(" ")[1]
    else:
        current_app.logger.debug("User not found")
        return ret_400()

    with current_app.app_context():
        user_service: UserService = current_app.extensions['user_service']
        upload_folder = current_app.config['data_dir']

        user = user_service.find_by_token(token)
        if user is None:
            return ret_401()
        upload_folder = os.path.join(upload_folder, user.username)

    return jsonify({"images": [f for f in os.listdir(upload_folder) if f.endswith(('.png', '.jpg', '.jpeg', '.gif'))]}), 200
