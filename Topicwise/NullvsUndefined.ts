function decorate(value: string | null | undefined) {
  if (value == null) {
    return value;
  }

  return `--${value?.trim()}---`;
}

console.log(decorate('Hello'));
console.log(decorate(null));//null
console.log(decorate(undefined));//undefined 