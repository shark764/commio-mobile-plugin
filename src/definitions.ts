export interface CommioMobilePlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
