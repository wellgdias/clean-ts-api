import {
  Controller,
  HttpRequest,
  HttpResponse
} from '../../presentation/protocols'
import { LogErrorRepository } from '../../data/protocols/log-error-repository'

export class LogControllerDecorator implements Controller {
  private readonly contoller: Controller
  private readonly logErrorRepository: LogErrorRepository

  constructor(controller: Controller, logErrorRepository: LogErrorRepository) {
    this.contoller = controller
    this.logErrorRepository = logErrorRepository
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const httpResponse = await this.contoller.handle(httpRequest)
    if (httpResponse.statusCode === 500) {
      await this.logErrorRepository.log(httpResponse.body.stack)
    }
    return httpResponse
  }
}
