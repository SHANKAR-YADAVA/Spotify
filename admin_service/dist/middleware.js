import axios from "axios";
import dotenv from "dotenv";
import multer from "multer";
dotenv.config();
export const isAuth = async (req, res, next) => {
    try {
        const token = req.headers.token;
        if (!token) {
            res.status(403).json({
                message: "Please Login",
            });
            return;
        }
        const { data } = await axios.get(`${process.env.User_URL}/api/v1/user/me`, {
            headers: {
                token,
            },
        });
        req.user = data;
        next();
    }
    catch (error) {
        res.status(403).json({
            message: "Please Login",
        });
    }
};
//multer setup
const storage = multer.memoryStorage();
const uploadFile = multer({ storage }).single("file");
export default uploadFile;
