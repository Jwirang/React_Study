import { atom } from "recoil";
import { UserRespons } from "../api/fatBrainApi/types";

const postListState = atom({
    key: 'postListState',
    default: [
        {id: '50ed9c95-7308-4f7f-ab3a-b7fcd9e0ad20', title: 'HTML', body: 'teiei'},
        {id: '05540435-c2f7-4088-a2b9-b42268a56e29', title: 'Javascript', body: 'teiei'},
        {id: 'f0ef1b02-9889-490c-837f-e3255e2c608c', title: 'React', body: 'teiei'},
    ],
})

const meState = atom<UserRespons>({
    key: 'meState',
    default: undefined,
})

export { postListState, meState }