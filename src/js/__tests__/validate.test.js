import { Validator } from '../validator';
let userName = new Validator

const userList = [
  ['Kirill-1985_master', 'ok'],
  ['Kirill-1985', 'ошибка'],
  ['2000_Kirill-1985_master', 'ошибка'],
  ['Kirill-11111_master', 'ошибка'],
  ['Kirill-1985_', 'ошибка,']
]
  
test("validate username test", () => {
  userList.forEach(el =>
    expect(userName.validateUsername(el[0])).toEqual(el[1])
  )
})

