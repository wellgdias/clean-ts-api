import jwt from 'jsonwebtoken'
import { Jwtadapter } from './jwt-adapter'

describe('Jwt Adapter', () => {
  test('Should call sign with correct values', async () => {
    const sut = new Jwtadapter('secret')
    const signSpy = jest.spyOn(jwt, 'sign')
    await sut.encrypt('any_id')
    expect(signSpy).toHaveBeenLastCalledWith({ id: 'any_id' }, 'secret')
  })
})
