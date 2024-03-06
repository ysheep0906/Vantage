import {atom} from 'recoil';

export const bearerAtom = atom({  //로그인할 때 필요한 Bearer Token
  key: 'bearer',
  default: '',
})

//export const 