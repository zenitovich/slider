import { TCapitalizeName, TEventName } from '@/interfaces.ts';

export function capitalize(string: TEventName): TCapitalizeName {
  return (string.charAt(0).toUpperCase() + string.slice(1)) as TCapitalizeName;
}
