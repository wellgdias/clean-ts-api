import {
  Controller,
  HttpRequest,
  HttpResponse
} from '../../presentation/protocols'

export class LogControllerDecorator implements Controller {
  private readonly contoller: Controller
  constructor(controller: Controller) {
    this.contoller = controller
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    await this.contoller.handle(httpRequest)
    return null
  }
}
