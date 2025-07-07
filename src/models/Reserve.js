import { Schema, model } from "mongoose";

const ReserveSchema = new Schema({
    date: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    House: {
        type: Schema.Types.ObjectId,
        ref: "House"
    }
});

export default model("Reserva", ReserveSchema);