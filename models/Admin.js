import { Schema as AdminSchema, model as AdminModel, models as AdminModels } from 'mongoose';


const adminSchema = new AdminSchema({
email: String,
password: String,
});


export const Admin = AdminModels.Admin || AdminModel('Admin', adminSchema);