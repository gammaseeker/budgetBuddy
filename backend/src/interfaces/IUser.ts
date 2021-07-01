/**
 * Represents the general user of the application
 */
interface IUser {
    email: string;
    name: string;
    password: string; // use bcrypt to produce pw hash and store hash
    // Do not need a creation date field, mongodb natively supports this
    // https://stackoverflow.com/questions/7327296/how-do-i-extract-the-created-date-out-of-a-mongo-objectid

    // Store profile pic on disk
    // https://stackoverflow.com/questions/8922056/what-is-the-best-way-to-upload-and-store-pictures-on-the-site
}

export default IUser;