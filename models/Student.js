import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    rollNumber: { type: String, required: true, unique: true },
    class: { type: String, required: true },
    section: { type: String },
    dob: { type: Date, required: true },
    gender: { type: String, required: true, enum: ['Male', 'Female'] }, 
    contact: {
        email: { type: String, required: true, unique: true }, 
        phone: { type: String, required: true },
    },
    address: {
        city: { type: String },
        state: { type: String },
    },
    createdAt: { type: Date, default: Date.now }, 
    updatedAt: { type: Date }, 
});

studentSchema.pre('save', function (next) {
    this.updatedAt = new Date();
    next();
});

const Student = mongoose.model('Student', studentSchema);

export default Student;
