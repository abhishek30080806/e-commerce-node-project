import bcrypt from "bcryptjs";

export const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);  // Generate salt
    return bcrypt.hash(password, salt);     // Hash password
};

export const comparePassword = async (password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword);  // Compare plain password with hashed password
};
