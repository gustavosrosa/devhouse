import multer from "multer";
import path from 'path';

export default {
    storage: multer.diskStorage({
        // Usar dessa forma por compatibilidade do sistema operacional
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: (req, file, cb) => {
            const ext = path.extname(file.originalname);
            const name = path.basename(file.originalname, ext);

            // Primeiro parametro é um cenario de erro
            cb(null, `${name}-${Date.now()}${ext}`)
        }
    })
}