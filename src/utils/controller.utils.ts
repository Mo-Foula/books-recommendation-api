import { Reflector } from '@nestjs/core'

export class ControllerUtils {
  static getPathFromController(controllerClass: any): string | undefined {
    const reflector = new Reflector()
    return reflector.get<string>('path', controllerClass)
  }

  static getMultiplePathsFromControllers(
    routesData: Record<string, { controller: any; name: string }>,
  ) {
    const reflector = new Reflector()
    const routes = {}
    Object.entries(routesData).forEach(([key, value]) => {
      routes[key] = reflector.get<string>('path', value.controller)
    })

    return routes
  }
}
