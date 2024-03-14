import {atom} from 'recoil';

export const bearerAtom = atom({  //로그인할 때 필요한 Bearer Token
  key: 'bearer',
  default: '',
})

export const nicknameAtom = atom({
  key: 'nickname',
  default: '',
})

export const emailAtom = atom({
  key: 'email',
  default: '',
})

export const jobAtom = atom({
  key: 'job',
  default: '',
})

export const addressAtom = atom({
  key: 'address',
  default: '',
})

export const birthDateAtom = atom({
  key: 'birthDate',
  default: '',
})