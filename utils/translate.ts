import { MessageKey, tr } from "~/language/tr";

export const translate = (value:MessageKey) =>{
    return tr[value]
}