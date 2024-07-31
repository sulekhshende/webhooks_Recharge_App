import { object, string, number, TypeOf } from "zod";

const payload = {
    body: object({
        mobileNo:string({
            required_error: "mobileNo is required"
        }),
        amount:number({
            required_error: "amount is required"
        }),
        yourId:number({
            required_error: "yourId is required"
        }),
        status:number({
            required_error: "status is required"
        })
    })
};

const params = {
    params: object({
        rechargeId:number({
            required_error: "rechargeId is required"
        }),
    })
};

export const createRechargeSchema = object({
    ...payload,
    ...params
});

export const updateRechargeSchema = object({
    ...params
});

export const getRechargeSchema = object({
    ...params
});

export const getAllRechargesSchema = object({
    ...payload,
    ...params
});

export const deleteRechargeSchema = object({
    ...params
});

export type CreateRechargeInput = TypeOf<typeof createRechargeSchema>
export type updateRechargeInput = TypeOf<typeof updateRechargeSchema>
export type getRechargeInput = TypeOf<typeof getRechargeSchema>
export type getAllRechargesInput = TypeOf<typeof getAllRechargesSchema>
export type deleteRechargeInput = TypeOf<typeof deleteRechargeSchema>
export type updateRechage = Omit<TypeOf<typeof updateRechargeSchema>, "params">

