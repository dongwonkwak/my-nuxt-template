import { useNuxtApp } from "#app";

export function useLogger(className: string) {
  const { $consola } = useNuxtApp();

  return {
    info: (message: string, ...args: unknown[]) => $consola.info(`[${className}] ${message}`, ...args),
    warn: (message: string, ...args: unknown[]) => $consola.warn(`[${className}] ${message}`, ...args),
    error: (message: string, ...args: unknown[]) => $consola.error(`[${className}] ${message}`, ...args),
    log: (message: string, ...args: unknown[]) => $consola.log(`[${className}] ${message}`, ...args),
  }
}