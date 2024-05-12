import { atom } from "recoil";

export const userAtom = atom<{
    Loading : boolean
    user? : {
        email : string
    }
}>({
    key : "useerAtom",
    default : {
        Loading : true
    }
})