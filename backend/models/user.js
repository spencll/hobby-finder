const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
});

// Pre-save hook to hash password

userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }
    next();
});

// Static method to authenticate user by JWT
userSchema.statics.authenticate = async function(token) {
    try {

        const decoded = jwt.verify(token, SECRET_KEY);
        const user = await this.findById(decoded.id);
        if (user) {
            return user;
        } else {
            throw new Error('User not found');
        }
    } catch (err) {
        throw new Error('Invalid token');
    }
};

// Instance method to compare password
userSchema.methods.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
