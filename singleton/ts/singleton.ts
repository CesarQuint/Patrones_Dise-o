class SingletonTS {
  private static instance: SingletonTS;
  public random: number;

  private constructor() {
    this.random = Math.random();
  }

  public static getInstance(): SingletonTS {
    if (!this.instance) {
      this.instance = new SingletonTS();
    }
    return this.instance;
  }
}

const example1 = SingletonTS.getInstance();
const example2 = SingletonTS.getInstance();

console.log(example1.random);
console.log(example2.random);
