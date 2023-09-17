from flask import Flask
from flask_login import LoginManager
from flask_sqlalchemy import SQLAlchemy
from flask_mailman import Mail
from importlib import import_module


db = SQLAlchemy()
login_manager = LoginManager()
mail = Mail()


def register_extensions(app):
    db.init_app(app)
    login_manager.init_app(app)
    mail.init_app(app)


def register_blueprints(app):
    for module_name in ('authentication', 'home', 'datatables', 'simulator', 'blog'):
        module = import_module('apps.{}.routes'.format(module_name))
        app.register_blueprint(module.blueprint)


def create_app(config):
    app = Flask(__name__)
    app.config.from_object(config)
    register_extensions(app)
    register_blueprints(app)
    return app
