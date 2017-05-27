export function throwIfAlreadyLoaded(parentModule: any, moduleName: string) {
  if (parentModule) {
    throw new Error(`${moduleName} has already been ThrowIfAlreadyLoaded. Import Core modules in the appModule only.)`);
  }
}
