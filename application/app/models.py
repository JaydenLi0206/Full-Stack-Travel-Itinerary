from app import db, login_manager
from flask_login import UserMixin

class User(db.Model, UserMixin):
    id = db.Column(db.String, primary_key=True)
    email = db.Column(db.String(100), unique=True, nullable=False)
    name = db.Column(db.String(100), nullable=False)


    def __repr__(self):
        return f"<User {self.name}>"

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(str(user_id))
