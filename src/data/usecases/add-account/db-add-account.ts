import { AddAccount, AddAccountModel, AccountModel, Encrypter, AddAccountRepository } from './db-add-account-protocols'

export class DBAddAccount implements AddAccount {
  private readonly encrypter: Encrypter
  private readonly AddAccountRepository: AddAccountRepository
  constructor (encrypter: Encrypter, AddAccountRepository: AddAccountRepository) {
    this.AddAccountRepository = AddAccountRepository
    this.encrypter = encrypter
  }

  async add (accountData: AddAccountModel): Promise<AccountModel> {
    const hashedPassword = await this.encrypter.encrypt(accountData.password)
    const account = await this.AddAccountRepository.add(Object.assign({}, accountData, { password: hashedPassword }))
    return await new Promise(resolve => resolve(account))
  }
}
