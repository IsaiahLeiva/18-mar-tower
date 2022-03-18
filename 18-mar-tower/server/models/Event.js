import { Schema } from "mongoose";


export const EventSchema = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        // coverImg: { type:  }
    },
    { timestamps: true, toJSON: { virtuals: true } }

)

EventSchema.virtual('creator', {
    localField: 'creatorId',
    foreignField: '_id',
    justOne: true,
    ref: 'Profile'
})